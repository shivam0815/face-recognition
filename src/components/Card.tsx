type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Card({ className = "", children }: Props) {
  return (
    <div
      className={
        "rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition " +
        className
      }
    >
      {children}
    </div>
  );
}
