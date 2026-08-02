// 会员状态查询：Authorization: Bearer <Firebase ID Token>
// 前端登录后调用，返回该用户（按邮箱）的订阅记录
import { NextResponse } from 'next/server';
import { getFirebaseAdmin, getFirestore } from '@/lib/firebase-admin';

export async function GET(req: Request) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!token) return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });

  const admin = getFirebaseAdmin();
  if (!admin) return NextResponse.json({ error: 'FIREBASE_NOT_CONFIGURED' }, { status: 500 });
  const db = getFirestore();
  if (!db) return NextResponse.json({ error: 'FIRESTORE_NOT_CONFIGURED' }, { status: 500 });

  let decoded;
  try {
    decoded = await admin.auth().verifyIdToken(token);
  } catch {
    return NextResponse.json({ error: 'INVALID_TOKEN' }, { status: 401 });
  }

  const email = decoded.email || '';
  if (!email) return NextResponse.json({ error: 'NO_EMAIL' }, { status: 400 });

  const snap = await db.collection('subscriptions').doc(email).get();
  if (!snap.exists) {
    return NextResponse.json({ email, subscription: null });
  }
  const data = snap.data() || {};
  return NextResponse.json({
    email,
    subscription: {
      plan: data.plan || null,
      status: data.status || null,
      licenseExpires: data.licenseExpires || null,
      licenseIssued: data.licenseIssued || null,
      paypalSubscriptionId: data.paypalSubscriptionId || null,
      // 用户自己的 Key（本人才可见）
      licenseKey: data.licenseKey || null,
      createdAt: data.createdAt || null,
      updatedAt: data.updatedAt || null,
    },
  });
}
