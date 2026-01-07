import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  q: string;
  a: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white"
          >
            <button
              className="w-full flex items-center justify-between px-4 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              type="button"
            >
              <span className="font-semibold text-slate-900">{it.q}</span>
              <ChevronDown
                className={
                  "h-5 w-5 text-slate-500 transition " +
                  (isOpen ? "rotate-180" : "")
                }
              />
            </button>
            {isOpen ? (
              <div className="px-4 pb-4 text-slate-600 leading-relaxed">
                {it.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
