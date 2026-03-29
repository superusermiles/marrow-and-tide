"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { clsx } from "clsx";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-xl border border-secondary/25 bg-background/70">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span>
                <span className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-secondary">Question</span>
                <span className="text-lg font-medium text-text">{item.question}</span>
              </span>
              <span className="shrink-0 rounded-full border border-secondary/25 p-2 text-primary">
                {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div className={clsx("grid transition-all duration-300 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-base leading-8 text-text/80">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
