// src/components/PageRenderer.tsx
// ✅ Uses your ApplyNowModal component + adds "Apply Now" button inside each ### accordion block

import { useMemo, useState } from "react";
import Card from "./Card";
import SectionHeading from "./SectionHeading";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Plus, Minus, ArrowRight } from "lucide-react";
import ApplyNowModal from "./ApplyNowModal";

type SubItem = { title: string; content: string[] };

type AnySection = {
  id: string;
  heading: string;
  type?: string; // "text" | "bullets" | "subsections" | "markdown" | any string
  text?: unknown;
  items?: unknown;
  content?: unknown; // markdown
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

/**
 * ✅ Markdown accordion by "###"
 * Adds Apply Now -> opens modal -> submits to backend (your modal already does submit)
 */
function MarkdownAccordion({ content }: { content: string }) {
  const [open, setOpen] = useState<string | null>(null);

  // ✅ Modal state (per page)
  const [applyOpen, setApplyOpen] = useState(false);
  const [applyTitle, setApplyTitle] = useState("");
  const [applyKey, setApplyKey] = useState("");

  const blocks = useMemo(() => {
    const parts = content.split(/^###\s+/gm).filter(Boolean);

    return parts
      .map((part) => {
        const lines = part.split("\n");
        const titleLine = (lines.shift() || "").trim();
        const body = lines.join("\n").trim();
        return { title: titleLine, body };
      })
      .filter((b) => b.title.length > 0);
  }, [content]);

  // fallback if no ### headings exist
  if (!blocks.length) {
    return (
      <div className="mt-4 text-slate-700 leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    );
  }

  // simple key generator (stable)
  const toKey = (t: string) =>
    t
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <>
      <div className="mt-4 space-y-4">
        {blocks.map((b) => {
          const isOpen = open === b.title;

          return (
            <Card key={b.title} className="p-0 overflow-hidden">
              {/* Header */}
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : b.title)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={`md-${toKey(b.title)}`}
              >
                <div className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900">
                  {b.title}
                </div>

                <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200">
                  {isOpen ? (
                    <Minus className="h-5 w-5 text-slate-900" />
                  ) : (
                    <Plus className="h-5 w-5 text-slate-900" />
                  )}
                </span>
              </button>

              {/* Body */}
              {isOpen ? (
                <div
                  id={`md-${toKey(b.title)}`}
                  className="border-t border-slate-200 px-6 py-5"
                >
                  <div className="text-slate-700 leading-relaxed">
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
                          <td
                            className="border border-slate-200 px-3 py-2"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {b.body}
                    </ReactMarkdown>
                  </div>

                  {/* ✅ Apply Now CTA */}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-slate-600">
                      Apply under{" "}
                      <span className="font-bold text-slate-900">{b.title}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setApplyTitle(b.title);
                        setApplyKey(toKey(b.title));
                        setApplyOpen(true);
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      Apply Now <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>

      {/* ✅ Modal */}
      <ApplyNowModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        sectionTitle={applyTitle}
        sectionKey={applyKey}
      />
    </>
  );
}

function SectionBlock({ s }: { s: AnySection }) {
  const t = typeof s.type === "string" ? s.type : "";

  const canText = t === "text" && typeof s.text === "string";
  const canBullets = t === "bullets" && Array.isArray(s.items);
  const canSubsections = t === "subsections" && Array.isArray(s.items);

  const canMarkdown = t === "markdown" && typeof s.content === "string";

  return (
    <Card className="p-6 sm:p-8">
      <div className="text-2xl font-extrabold tracking-tight text-slate-900">
        {s.heading}
      </div>

      {canText ? (
        <p className="mt-3 text-slate-700 leading-relaxed">{s.text as string}</p>
      ) : null}

      {canBullets ? (
        <ul className="mt-4 space-y-2 text-slate-700">
          {(s.items as string[]).map((it, i) => (
            <li key={i} className="leading-relaxed">
              • {it}
            </li>
          ))}
        </ul>
      ) : null}

      {canSubsections ? (
        <div className="mt-5 grid gap-4">
          {(s.items as any[]).map((it, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="font-extrabold text-slate-900">
                {(it as any)?.title}
              </div>
              <ul className="mt-2 space-y-2 text-slate-700">
                {((it as any)?.content || []).map((c: any, j: number) => (
                  <li key={j} className="leading-relaxed">
                    • {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {/* ✅ MARKDOWN accordion + Apply */}
      {canMarkdown ? <MarkdownAccordion content={s.content as string} /> : null}
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
