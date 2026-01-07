import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes } from "react";

type Props = {
  to?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/* Base button */
const base =
  "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";

/* 🎨 VARIANTS – DARK / CINEMATIC */
const variants = {
  /* Main CTA */
  primary:
    "bg-gradient-to-r from-[#111827] via-[#1f2933] to-[#b45309] text-white shadow-[0_20px_60px_rgba(0,0,0,0.55)] hover:brightness-110 focus:ring-[#b45309]/40",

  /* ✅ Secondary CTA – CRISP, NO BLUR */
  secondary:
    "bg-[#0f172a] text-slate-200 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:bg-[#111827] hover:text-white focus:ring-white/30",

  /* Ghost / text button */
  ghost:
    "text-slate-300 hover:text-white hover:bg-white/5 focus:ring-white/20",
};


/* Sizes */
const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  to,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
