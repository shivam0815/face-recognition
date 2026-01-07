// src/components/Navbar.tsx
import { useMemo, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navClass = ({ isActive }: { isActive: boolean }) =>
  "px-3 py-2 rounded-xl text-sm font-semibold transition " +
  (isActive
    ? "bg-slate-900 text-white"
    : "text-slate-700 hover:bg-slate-100");

// Face-type SVG logo (S-PassX 360)
function FaceLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* soft rounded square background via currentColor opacity handled in wrapper */}
      {/* Face outline */}
      <path
        d="M32 10c-9.3 0-16 6.7-16 16.4V34c0 11.3 6.9 20 16 20s16-8.7 16-20v-7.6C48 16.7 41.3 10 32 10Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left scan bracket */}
      <path
        d="M14 22v-4.5A5.5 5.5 0 0 1 19.5 12H24"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right scan bracket */}
      <path
        d="M50 22v-4.5A5.5 5.5 0 0 0 44.5 12H40"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Minimal “eyes” */}
      <path
        d="M26 30h0.01M38 30h0.01"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Subtle smile */}
      <path
        d="M26 40c2.5 2.5 9.5 2.5 12 0"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { to: "/about", label: "About" },
      { to: "/how-it-works", label: "How it works" },
      { to: "/use-cases", label: "Use cases" },
      { to: "/security", label: "Security" },
      { to: "/technology", label: "Technology" },
      { to: "/investors", label: "Investors" },
    ],
    []
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {/* Logo */}
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 text-white grid place-items-center shadow-lg shadow-brand-500/20">
            <FaceLogo className="h-6 w-6" />
          </div>

          {/* Brand */}
          <div className="leading-tight">
            <div className="font-heading font-extrabold tracking-tight text-slate-900">
              S-PassX 360
            </div>
            
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button to="/partnership" variant="secondary" size="md">
            Request Pilot
          </Button>
          <Button to="/partnership#form" variant="primary" size="md">
            Partner
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 rounded-xl hover:bg-slate-100"
          onClick={() => setOpen((s) => !s)}
          aria-label="Open menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={navClass}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="pt-2 grid grid-cols-1 gap-2">
              <Button to="/partnership" variant="secondary" className="w-full">
                Request Pilot
              </Button>
              <Button to="/partnership#form" className="w-full">
                Partner
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
