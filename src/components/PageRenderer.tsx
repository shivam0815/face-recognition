// src/components/PageRenderer.tsx

import Card from "./Card";
import SectionHeading from "./SectionHeading";

/**
 * Pragmatic renderer:
 * - Accepts CMS-like content objects where `type` may be inferred as `string`
 * - Uses runtime type-guards so TS doesn't complain
 * - No need to edit all content files
 */

type SubItem = { title: string; content: string[] };

type AnySection = {
  id: string;
  heading: string;
  type?: string; // may be "text" | "bullets" | "subsections" or any string
  text?: unknown;
  items?: unknown;
};

export type ContentPage = {
  title: string;
  description?: string;
  intro?: string;
  sections: AnySection[];
};

function isStringArray(x: unknown): x is string[] {
  return Array.isArray(x) && x.every((v) => typeof v === "string");
}

function isSubItem(x: unknown): x is SubItem {
  if (!x || typeof x !== "object") return false;
  const o = x as any;
  return typeof o.title === "string" && isStringArray(o.content);
}

function isSubItemArray(x: unknown): x is SubItem[] {
  return Array.isArray(x) && x.every(isSubItem);
}

function SectionBlock({ s }: { s: AnySection }) {
  const t = typeof s.type === "string" ? s.type : "";

  const canText = t === "text" && typeof s.text === "string";
  const canBullets = t === "bullets" && isStringArray(s.items);
  const canSubsections = t === "subsections" && isSubItemArray(s.items);

  return (
    <Card className="p-6 sm:p-8">
      <div className="text-2xl font-extrabold tracking-tight text-slate-900">
        {s.heading}
      </div>

      {/* TEXT */}
      {canText ? (
        <p className="mt-3 text-slate-700 leading-relaxed">{s.text as string}</p>
      ) : null}

      {/* BULLETS */}
      {canBullets ? (
        <ul className="mt-4 space-y-2 text-slate-700">
          {(s.items as string[]).map((it, i) => (
            <li key={i} className="leading-relaxed">
              • {it}
            </li>
          ))}
        </ul>
      ) : null}

      {/* SUBSECTIONS */}
      {canSubsections ? (
        <div className="mt-5 grid gap-4">
          {(s.items as SubItem[]).map((it, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="font-extrabold text-slate-900">{it.title}</div>
              <ul className="mt-2 space-y-2 text-slate-700">
                {it.content.map((c, j) => (
                  <li key={j} className="leading-relaxed">
                    • {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {/* If unknown type or malformed data: render nothing (safe) */}
    </Card>
  );
}

export default function PageRenderer({ page }: { page: ContentPage }) {
  return (
    <main className="pt-20">
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="S-PassX 360"
            title={page.title}
            subtitle={page.description || page.intro || ""}
            align="left"
          />
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
          {page.sections.map((s) => (
            <SectionBlock key={s.id} s={s} />
          ))}
        </div>
      </section>
    </main>
  );
}
