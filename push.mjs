// 仅通过 GitHub Contents API 推送单个文件（禁止 git 全仓推送，仓库含 27MB Setup.exe）
import fs from 'node:fs';

const TOKEN = process.env.GH_TOKEN;
if (!TOKEN) {
  console.error('missing GH_TOKEN');
  process.exit(1);
}

const OWNER = '863683348';
const REPO = 'codex-skin-studio';
const BRANCH = 'main';
const FILES = ['src/data/posts.ts'];
const MESSAGE = 'feat(blog): day 11 stage-black-gold-theme bilingual post';

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'seo-100day-publish',
};

for (const file of FILES) {
  const api = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${file}`;

  let sha;
  const getRes = await fetch(`${api}?ref=${BRANCH}`, { headers });
  if (getRes.ok) {
    const json = await getRes.json();
    sha = json.sha;
  } else if (getRes.status !== 404) {
    console.error('GET failed', file, getRes.status, await getRes.text());
    process.exit(1);
  }

  const content = fs.readFileSync(file).toString('base64');
  const putRes = await fetch(api, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: MESSAGE, content, branch: BRANCH, ...(sha ? { sha } : {}) }),
  });

  if (!putRes.ok) {
    console.error('PUT failed', file, putRes.status, await putRes.text());
    process.exit(1);
  }
  const out = await putRes.json();
  console.log('OK', file, out.commit.sha);
}
