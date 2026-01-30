// src/components/careers/ApplyNowModal.tsx

import { useEffect, useMemo, useState } from "react";
import { X, Loader2 } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  sectionTitle: string; // e.g. "1. Executive & Leadership Team"
  sectionKey: string;   // e.g. "Executive & Leadership Team"
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  experience: string;
  roleInterested: string;
  message: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function ApplyNowModal({ open, onClose, sectionTitle, sectionKey }: Props) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
const API = import.meta.env.VITE_API_BASE_URL;
  const [f, setF] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    roleInterested: "",
    message: "",
  });

  useEffect(() => {
    if (!open) return;
    setOk(null);
    setErr(null);
    setLoading(false);
    setF({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      experience: "",
      roleInterested: "",
      message: "",
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  const canSubmit = useMemo(() => {
    if (!f.fullName.trim()) return false;
    if (!isEmail(f.email)) return false;
    if (!f.phone.trim() || f.phone.trim().length < 10) return false;
    if (!f.roleInterested.trim()) return false;
    return true;
  }, [f]);

  async function submit() {
    setErr(null);
    setOk(null);

    if (!canSubmit) {
      setErr("Please fill required fields correctly.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API}/api/careers/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sectionTitle,
          sectionKey,
          ...f,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Failed to submit. Try again.");

      setOk("Application submitted successfully. We will contact you soon.");
    } catch (e: any) {
      setErr(e?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
        aria-label="Close modal"
      />

      {/* modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl">
          {/* header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
            <div>
              <div className="text-xs font-semibold text-slate-500">Apply Now</div>
              <div className="mt-1 text-lg font-extrabold text-slate-900">
                {sectionTitle}
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Fill details and submit. Your application will be emailed to HR.
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-slate-900" />
            </button>
          </div>

          {/* body */}
          <div className="px-6 py-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name *">
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
                  value={f.fullName}
                  onChange={(e) => setF((p) => ({ ...p, fullName: e.target.value }))}
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email *">
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
                  value={f.email}
                  onChange={(e) => setF((p) => ({ ...p, email: e.target.value }))}
                  placeholder="name@email.com"
                />
              </Field>

              <Field label="Phone *">
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
                  value={f.phone}
                  onChange={(e) => setF((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="10-digit number"
                />
              </Field>

              <Field label="City">
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
                  value={f.city}
                  onChange={(e) => setF((p) => ({ ...p, city: e.target.value }))}
                  placeholder="Delhi / Noida / etc"
                />
              </Field>

              <Field label="Experience (years)">
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
                  value={f.experience}
                  onChange={(e) => setF((p) => ({ ...p, experience: e.target.value }))}
                  placeholder="0 / 1 / 3 / 5..."
                />
              </Field>

              <Field label="Role Interested *">
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
                  value={f.roleInterested}
                  onChange={(e) => setF((p) => ({ ...p, roleInterested: e.target.value }))}
                  placeholder="e.g., Front-end Engineer"
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Message / Notes">
                <textarea
                  className="min-h-[110px] w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400"
                  value={f.message}
                  onChange={(e) => setF((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Write anything important (skills, notice period, portfolio link, etc.)"
                />
              </Field>
            </div>

            {err ? (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {err}
              </div>
            ) : null}

            {ok ? (
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                {ok}
              </div>
            ) : null}
          </div>

          {/* footer */}
          <div className="flex flex-col-reverse gap-3 border-t border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={onClose}
              className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={submit}
              disabled={loading}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: any }) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-semibold text-slate-700">{label}</div>
      {children}
    </label>
  );
}
