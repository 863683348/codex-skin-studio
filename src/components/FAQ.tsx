'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ({ items }: { items: ReadonlyArray<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div key={i} className="rounded-md border border-border bg-bg-secondary">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left text-h3 text-text-primary"
          >
            <span>{it.q}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 transition-transform ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {open === i && (
            <div className="px-4 pb-4 text-small text-text-secondary">{it.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
