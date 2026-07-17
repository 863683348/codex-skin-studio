'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/zh');
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="text-muted-foreground">正在跳转到中文版…</p>
        <noscript>
          <p className="mt-2">
            如果未自动跳转，请
            <a href="/zh" className="text-primary underline">
              点击这里进入中文版
            </a>
            。
          </p>
        </noscript>
      </div>
    </main>
  );
}
