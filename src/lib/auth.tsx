'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import {
  getFirebaseAuth,
  isFirebaseConfigured,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  fbSignOut,
  type User,
} from './firebase';

type SignInResult = { ok: boolean; error?: string };

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  configured: boolean;
  signInWithGoogle: () => Promise<SignInResult>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const signInWithGoogle = useCallback(async (): Promise<SignInResult> => {
    const auth = getFirebaseAuth();
    if (!auth) {
      return { ok: false, error: 'FIREBASE_NOT_CONFIGURED' };
    }
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      return { ok: true };
    } catch (e) {
      return { ok: false, error: (e as Error).message };
    }
  }, []);

  const signOut = useCallback(async () => {
    const auth = getFirebaseAuth();
    if (auth) await fbSignOut(auth);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, configured: isFirebaseConfigured, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an <AuthProvider>');
  }
  return ctx;
}
