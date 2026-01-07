type Item = { title: string; text: string; tag?: string };

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="space-y-4">
      {items.map((it, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="h-3 w-3 rounded-full bg-slate-900" />
            {i !== items.length - 1 ? (
              <div className="w-px flex-1 bg-slate-200 mt-2" />
            ) : null}
          </div>
          <div className="pb-2">
            {it.tag ? (
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                {it.tag}
              </div>
            ) : null}
            <div className="font-semibold text-slate-900">{it.title}</div>
            <div className="text-slate-600">{it.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
