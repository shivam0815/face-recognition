type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-slate-600 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
