'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { LogOut, Palette, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { GoogleIcon } from './GoogleIcon';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export function AccountMenu({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const { user, loading, signInWithGoogle, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const handleLogin = async () => {
    setError(null);
    const res = await signInWithGoogle();
    if (!res.ok) {
      setError(
        res.error === 'FIREBASE_NOT_CONFIGURED'
          ? dict.auth.notConfigured
          : dict.auth.loginFailed,
      );
    }
  };

  if (loading) {
    return (
      <div
        className="h-8 w-8 animate-pulse rounded-full bg-bg-tertiary"
        aria-hidden="true"
      />
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-end gap-1">
        <button
          onClick={handleLogin}
          className="flex items-center gap-2 rounded-lg border border-border bg-bg-secondary px-3 py-1.5 text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
        >
          <GoogleIcon size={16} />
          <span>{dict.auth.signIn}</span>
        </button>
        {error && <span className="max-w-[180px] text-right text-xs text-accent">{error}</span>}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setMenuOpen((o) => !o)}
        className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-border"
        aria-label={dict.auth.accountMenu}
      >
        {user.photoURL ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={user.photoURL} alt="" className="h-full w-full object-cover" />
        ) : (
          <UserIcon size={16} />
        )}
      </button>
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-lg border border-border bg-bg-secondary py-1 shadow-lg">
          <div className="border-b border-border px-3 py-2 text-xs text-text-tertiary">
            {user.displayName ?? user.email}
          </div>
          <Link
            href={`/${locale}/gallery`}
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-text-primary transition-colors hover:bg-bg-tertiary"
          >
            <Palette size={16} /> {dict.auth.myThemes}
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              void signOut();
            }}
            className="flex w-full items-center gap-2 px-3 py-2 text-sm text-text-primary transition-colors hover:bg-bg-tertiary"
          >
            <LogOut size={16} /> {dict.auth.signOut}
          </button>
        </div>
      )}
    </div>
  );
}
