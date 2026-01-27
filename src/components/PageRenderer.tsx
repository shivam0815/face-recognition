// src/components/PageRenderer.tsx

import Card from "./Card";
import SectionHeading from "./SectionHeading";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  type?: string; // "text" | "bullets" | "subsections" | "markdown" | any string
  text?: unknown;
  items?: unknown;

  // ✅ for markdown sections
  content?: unknown;
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

  // ✅ MARKDOWN support
  const canMarkdown = t === "markdown" && typeof s.content === "string";

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

      {/* ✅ MARKDOWN (tables, headings, lists) */}
      {canMarkdown ? (
        <div className="mt-4 text-slate-700 leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: (p) => (
                <h2
                  className="mt-6 text-xl font-extrabold tracking-tight text-slate-900"
                  {...p}
                />
              ),
              h3: (p) => (
                <h3
                  className="mt-5 text-lg font-extrabold tracking-tight text-slate-900"
                  {...p}
                />
              ),
              p: (p) => <p className="mt-3" {...p} />,
              ul: (p) => <ul className="mt-3 space-y-2" {...p} />,
              li: (p) => (
                <li className="leading-relaxed list-disc ml-5" {...p} />
              ),
              hr: () => <hr className="my-6 border-slate-200" />,
              table: ({ ...props }) => (
                <div className="mt-4 overflow-x-auto">
                  <table
                    className="w-full border-collapse text-sm"
                    {...props}
                  />
                </div>
              ),
              thead: ({ ...props }) => (
                <thead className="bg-slate-50" {...props} />
              ),
              th: ({ ...props }) => (
                <th
                  className="border border-slate-200 px-3 py-2 text-left font-bold text-slate-900"
                  {...props}
                />
              ),
              td: ({ ...props }) => (
                <td className="border border-slate-200 px-3 py-2" {...props} />
              )
            }}
          >
            {s.content as string}
          </ReactMarkdown>
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
