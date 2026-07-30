import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-container flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="text-[96px] font-semibold leading-none text-text-tertiary">
        404
      </h1>
      <p className="mt-2 text-h3 text-text-secondary">
        页面不存在 · Page not found
      </p>
      <div className="mt-6 flex gap-4">
        <Link
          href="/zh"
          className="rounded-md bg-accent px-6 py-3 text-body font-medium text-white transition-colors hover:bg-accent-hover"
        >
          中文首页
        </Link>
        <Link
          href="/en"
          className="rounded-md border border-border px-6 py-3 text-body font-medium text-text-primary transition-colors hover:border-border-hover"
        >
          English Home
        </Link>
      </div>
    </div>
  );
}
