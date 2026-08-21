// 社区皮肤 UGC 提交 API
// POST /api/community/submit
// 校验必填字段，写入 Firestore community_submissions 集合（待审核）。
// 未配置 Firebase 时降级写入 public/data/community-submissions.json（本地开发用）。
import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';
import { getFirestore } from '@/lib/firebase-admin';

type SubmitBody = {
  nameEn: string;
  nameZh?: string;
  repo?: string;
  url: string;
  color?: string;
  description?: string;
};

function normalize(input: unknown): SubmitBody | null {
  if (!input || typeof input !== 'object') return null;
  const b = input as Record<string, unknown>;
  const nameEn = typeof b.nameEn === 'string' ? b.nameEn.trim() : '';
  const url = typeof b.url === 'string' ? b.url.trim() : '';
  if (!nameEn || !url) return null;
  if (nameEn.length > 80 || url.length > 500) return null;
  return {
    nameEn,
    nameZh: typeof b.nameZh === 'string' ? b.nameZh.trim().slice(0, 80) : undefined,
    repo: typeof b.repo === 'string' ? b.repo.trim().slice(0, 200) : undefined,
    url,
    color: typeof b.color === 'string' ? b.color.trim().slice(0, 16) : undefined,
    description: typeof b.description === 'string' ? b.description.trim().slice(0, 300) : undefined,
  };
}

// 简单内存频率限制：同一 IP 5 分钟内最多 3 次
const ipHits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < 5 * 60_000);
  if (hits.length >= 3) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  return false;
}

export async function POST(req: Request) {
  // 频率限制
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  let body: SubmitBody | null;
  try {
    body = normalize(await req.json());
  } catch {
    return NextResponse.json({ error: 'BAD_REQUEST' }, { status: 400 });
  }
  if (!body) {
    return NextResponse.json({ error: 'MISSING_FIELDS' }, { status: 400 });
  }

  const submission = {
    id: randomUUID(),
    nameEn: body.nameEn,
    nameZh: body.nameZh || null,
    repo: body.repo || null,
    url: body.url,
    color: body.color || null,
    description: body.description || null,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  // 优先写 Firestore
  const db = getFirestore();
  if (db) {
    try {
      await db.collection('community_submissions').doc(submission.id).set(submission);
      return NextResponse.json({ ok: true, id: submission.id });
    } catch (err) {
      console.error('[community-submit] Firestore write failed:', err);
      // 落到本地文件降级
    }
  }

  // 降级：追加到 public/data/community-submissions.json（开发环境）
  try {
    const dir = path.join(process.cwd(), 'public', 'data');
    const file = path.join(dir, 'community-submissions.json');
    await fs.mkdir(dir, { recursive: true });
    let list: unknown[] = [];
    try {
      const raw = await fs.readFile(file, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) list = parsed;
    } catch {
      /* 文件不存在或损坏，从空开始 */
    }
    list.push(submission);
    await fs.writeFile(file, JSON.stringify(list, null, 2), 'utf8');
    return NextResponse.json({ ok: true, id: submission.id, fallback: 'file' });
  } catch (err) {
    console.error('[community-submit] file fallback failed:', err);
    return NextResponse.json({ error: 'STORAGE_FAILED' }, { status: 500 });
  }
}
