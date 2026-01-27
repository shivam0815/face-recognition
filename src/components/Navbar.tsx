// src/components/Navbar.tsx
import { useMemo, useRef, useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

const navClass = ({ isActive }: { isActive: boolean }) =>
  "px-3 py-2 rounded-xl text-sm font-semibold transition " +
  (isActive
    ? "bg-slate-900 text-white"
    : "text-slate-700 hover:bg-slate-100");

const dropdownItemClass =
  "block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100";



function useOutsideClick(ref: React.RefObject<HTMLElement | null>, onOutside: () => void) {
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!ref.current) return;
      const target = e.target as Node;
      if (!ref.current.contains(target)) onOutside();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onOutside]);
}

function ClickDropdown({
  label,
  items,
  open,
  onToggle,
  onClose,
}: {
  label: string;
  items: { to: string; label: string }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapRef, () => open && onClose());

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={onToggle}
        className="px-3 py-2 rounded-xl text-sm font-semibold transition text-slate-700 hover:bg-slate-100 inline-flex items-center gap-1"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={"h-4 w-4 opacity-70 transition " + (open ? "rotate-180" : "")} />
      </button>

      {open ? (
        <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-black/5 p-2 z-50">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={dropdownItemClass}
              onClick={onClose}
            >
              {it.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [trustOpen, setTrustOpen] = useState(false);
  const [govOpen, setGovOpen] = useState(false);

  const location = useLocation();

  // Close dropdowns on route change
  useEffect(() => {
    setTrustOpen(false);
    setGovOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const links = useMemo(
    () => [
      { to: "/about", label: "About" },
      { to: "/how-it-works", label: "How it works" },
      { to: "/use-cases", label: "Use cases" },
      { to: "/technology", label: "Technology" },
      { to: "/investors", label: "Investors" },
      { to: "/careers", label: "Careers" },
    ],
    []
  );

  const trustItems = useMemo(
    () => [
      { to: "/security", label: "Security & Privacy" },
      { to: "/ethics", label: "Ethical & Legal Safeguards" },
      { to: "/not-surveillance", label: "Why Not Surveillance" },
      { to: "/anti-misuse", label: "Anti-Misuse (Hack Prevention)" },
    ],
    []
  );

  const govtItems = useMemo(
    () => [
      { to: "/government-policy", label: "Government & Policy DPR" },
      { to: "/scale-impact", label: "Scale, Impact & Future" },
      { to: "/roadmap", label: "Delivery Roadmap" },
    ],
    []
  );

  const mobileLinks = useMemo(
    () => [
      ...links,
      { to: "/security", label: "Security & Privacy" },
      { to: "/ethics", label: "Ethical & Legal Safeguards" },
      { to: "/not-surveillance", label: "Why Not Surveillance" },
      { to: "/anti-misuse", label: "Anti-Misuse (Hack Prevention)" },
      { to: "/government-policy", label: "Government & Policy DPR" },
      { to: "/scale-impact", label: "Scale, Impact & Future" },
      { to: "/roadmap", label: "Delivery Roadmap" },
      { to: "/careers", label: "Careers" },
    ],
    [links]
  );

  const closeAllDropdowns = () => {
    setTrustOpen(false);
    setGovOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          
          <div className="leading-tight">
            <div className="font-heading font-extrabold tracking-tight text-slate-900 flex items-baseline">
  <span>S-PASS</span>
  <span className="mx-0.5 text-2xl font-black">X</span>
  <span className="ml-1 text-sm font-semibold text-slate-600">360</span>
</div>

          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navClass} onClick={closeAllDropdowns}>
              {l.label}
            </NavLink>
          ))}

          <ClickDropdown
            label="Trust"
            items={trustItems}
            open={trustOpen}
            onToggle={() => {
              setTrustOpen((v) => !v);
              setGovOpen(false);
            }}
            onClose={() => setTrustOpen(false)}
          />

          <ClickDropdown
            label="Government"
            items={govtItems}
            open={govOpen}
            onToggle={() => {
              setGovOpen((v) => !v);
              setTrustOpen(false);
            }}
            onClose={() => setGovOpen(false)}
          />
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button to="/partnership" variant="secondary" size="md">
            Request Pilot
          </Button>
          <Button to="/partnership#form" variant="primary" size="md">
            Partner
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-xl hover:bg-slate-100"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Open menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            {mobileLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={navClass}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}

            <div className="pt-2 grid grid-cols-1 gap-2">
              <Button to="/partnership" variant="secondary" className="w-full" onClick={() => setMobileOpen(false)}>
                Request Pilot
              </Button>
              <Button to="/partnership#form" className="w-full" onClick={() => setMobileOpen(false)}>
                Partner
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
