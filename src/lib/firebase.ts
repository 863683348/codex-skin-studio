import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';

// 所有 NEXT_PUBLIC_* 在构建期被内联；缺失时为 undefined（即未配置）。
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId,
);

let authInstance: ReturnType<typeof getAuth> | null = null;

// 守卫式获取 auth 实例：未配置时返回 null，不抛错（保证静态导出站点可正常构建/渲染）。
export function getFirebaseAuth(): ReturnType<typeof getAuth> | null {
  if (!isFirebaseConfigured) return null;
  if (!getApps().length) {
    initializeApp(firebaseConfig as FirebaseOptions);
  }
  if (!authInstance) {
    authInstance = getAuth(getApp());
  }
  return authInstance;
}

export { GoogleAuthProvider, signInWithPopup, fbSignOut, onAuthStateChanged };
export type { User };
