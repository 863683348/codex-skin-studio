// 服务端 Firebase Admin（写 Firestore / 验证 token）
// 凭据来自 Vercel 环境变量（Firebase 控制台 → 项目设置 → 服务账号 → 生成新私钥）
import admin from 'firebase-admin';

function parseServiceAccount() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  if (!projectId || !clientEmail || !privateKey) return null;
  return {
    projectId,
    clientEmail,
    // Vercel env 会转义换行，这里还原
    privateKey: privateKey.replace(/\\n/g, '\n'),
  };
}

let app: admin.app.App | null = null;

export function getFirebaseAdmin(): admin.app.App | null {
  if (app) return app;
  const sa = parseServiceAccount();
  if (!sa) return null;
  app = admin.initializeApp({ credential: admin.credential.cert(sa) });
  return app;
}

export function getFirestore() {
  const a = getFirebaseAdmin();
  return a ? a.firestore() : null;
}
