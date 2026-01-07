// src/pages/Home.tsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  ScanFace,
  Tickets,
  LockKeyhole,
  Layers,
  Building2,
  Train,
  Plane,
  Bus,
  Hotel,
  CalendarCheck,
  Sparkles,
  BarChart3,
  Timer,
  BadgeCheck,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Button from "../components/Button";
import { site, howSteps, useCaseList } from "../data/siteData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: d, ease: EASE },
  viewport: { once: true, amount: 0.2 },
});

const fade = (d = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.7, delay: d, ease: EASE },
  viewport: { once: true, amount: 0.2 },
});

function Pill({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
      <Icon className="h-4 w-4" />
      {label}
    </span>
  );
}

export default function Home() {
  const stats = useMemo(
    () => [
      {
        icon: Timer,
        title: "Seconds-level entry",
        text: "Designed for fast verification at enabled gates/lobbies.",
      },
      {
        icon: BarChart3,
        title: "Operational reporting",
        text: "Audit-friendly outcomes with minimal logs and clear metrics.",
      },
      {
        icon: BadgeCheck,
        title: "Pilot-ready scope",
        text: "Start with limited lanes/venues, expand based on results.",
      },
    ],
    []
  );

  const benefitCards = useMemo(
    () => [
      {
        icon: Tickets,
        title: "No Ticket",
        text: "For approved lanes, identity verification can replace paper/QR handling.",
      },
      {
        icon: ScanFace,
        title: "No Card / ID at Gate",
        text: "Reduces repetitive manual checks while keeping access permission-based.",
      },
      {
        icon: Layers,
        title: "No User Hardware",
        text: "Users carry nothing extra—only the entry point is enabled.",
      },
    ],
    []
  );

  const useCaseIcons: Record<string, any> = {
    airports: Plane,
    rail: Train,
    bus: Bus,
    hotels: Hotel,
    corporate: Building2,
    events: CalendarCheck,
  };

  const [active, setActive] = useState(useCaseList[0]?.id ?? "airports");
  const activeUseCase = useCaseList.find((u) => u.id === active) ?? useCaseList[0];

  /**
   * ✅ FIX: Your earlier Unsplash URLs were breaking (images not loading).
   * Use these stable, high-res endpoints (w=2400, q=85) so images stay sharp.
   */
  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1527007622069-3a0241e1cd8c?auto=format&fit=crop&w=2400&q=85",
      alt: "Airport terminal modern departure hall",
    },
 {
      // airport/security vibe
      src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=2400&q=85",
      alt: "Airport security / gate area",
    },


    {

      src: "https://images.unsplash.com/photo-1758874910859-2708d05fe1ef?auto=format&fit=crop&w=2400&q=85",
      alt: "Metro station interior with commuters",
    },
    {
      src: "https://images.unsplash.com/photo-1712041503216-c466cee9c845?auto=format&fit=crop&w=2400&q=85",
      alt: "Subway station crowd movement",
    },
    {
      // airport/security vibe
      src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=2400&q=85",
      alt: "Airport security / gate area",
    },
    {
      // corporate lobby + security gate
      src: "https://unsplash.com/photos/goyJ2pxJjrg/download?force=true",
      alt: "Modern corporate lobby with security gate",
    },
  ];

  const [videoFailed, setVideoFailed] = useState(false);
  const mp4Src = "/demo.mp4";

 
  const youtubeId = "U8YoY3rYtIM";
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&controls=1`;

  return (
    <>
      <Seo
        title="S-PassX 360 | Ticketless Face Identity Platform"
        description="S-PassX 360 enables ticketless, cardless access using secure face-based identity. Designed for pilots with airports, metro, hotels, buses, and events."
        canonical={`${site.baseUrl}/`}
      />

      {/* HERO (fuller height + sharper visual + warm/graphite gradient) */}
      <section className="relative overflow-hidden bg-[radial-gradient(1100px_circle_at_18%_8%,rgba(2,6,23,0.12),transparent_55%)]">
        {/* warm glow (not blue) */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_35%,rgba(120,53,15,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />

        {/* Make hero feel more “banner-like” (more height) */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-14 sm:pb-20 min-h-[82vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
            <motion.div {...fadeUp(0)}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  Pilot-first Platform
                </span>
                <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  {site.name}
                </span>
              </div>

              <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Travel without Tickets.
                <span className="block text-slate-900">Your Face is Your Identity.</span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                <span className="font-semibold text-slate-900">Your Face. Your Pass. Everywhere.</span>{" "}
                S-PassX 360 is a privacy-first identity platform enabling ticketless access across airports,
                metro, buses, hotels, and events.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button to="/partnership" size="lg">
                  Request Pilot <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button to="/partnership#form" size="lg" variant="secondary">
                  Partner With Us
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                <Pill icon={ShieldCheck} label="Consent-based" />
                <Pill icon={LockKeyhole} label="Encrypted templates" />
                <Pill icon={ScanFace} label="Fast verification" />
              </div>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div key={s.title} {...fadeUp(0.08 + i * 0.06)}>
                      <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="font-bold text-slate-900">{s.title}</div>
                        </div>
                        <div className="mt-2 text-sm text-slate-600">{s.text}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: premium visual card (ONLY 1 sharp hero image; not all images stacked) */}
            <motion.div {...fadeUp(0.12)} className="lg:justify-self-end">
              <Card className="p-4 sm:p-6 bg-white/70 backdrop-blur overflow-hidden">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                      Live flow concept
                    </div>
                    <div className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                      Verify → Allow → Record
                    </div>
                    <div className="mt-2 text-sm text-slate-600">
                      A simple operator view for pilot lanes/venues.
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center">
                    <ScanFace className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-5 rounded-3xl overflow-hidden border border-slate-200">
                  <div className="relative h-[240px] sm:h-[300px]">
                    <img
                      src={gallery[0].src}
                      alt={gallery[0].alt}
                      loading="eager"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ imageRendering: "auto" }}
                    />
                    {/* cinematic overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10" />
                  </div>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Button to="/how-it-works" variant="secondary" className="w-full">
                    How it works
                  </Button>
                  <Button to="/security" className="w-full">
                    Security & privacy
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </section>

      {/* VIDEO (fullscreen + attractive gradient) */}
      <section className="py-14 sm:py-18 bg-[radial-gradient(1100px_circle_at_20%_10%,rgba(2,6,23,0.06),transparent_55%)] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Demo"
            title="See the flow in action"
            subtitle="A cinematic overview of ticketless verification—built for pilots."
            align="center"
          />

          <motion.div {...fadeUp(0)} className="mt-10">
            <div className="rounded-[28px] overflow-hidden border border-slate-200 bg-black shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
              <div className="relative">
                {/* Full-width, tall video box for “banner” feel */}
                <div className="relative w-full aspect-[16/7] bg-black">
                  {!videoFailed ? (
                    <video
  className="absolute inset-0 w-full h-full object-cover"
  src={mp4Src}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  controls={false}
  controlsList="nodownload noplaybackrate noremoteplayback"
  disablePictureInPicture
  onError={() => setVideoFailed(true)}
/>

                  ) : (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={youtubeUrl}
                      title="Video demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}
                </div>

                {/* overlay bar */}
                <div className="p-5 sm:p-6 bg-[linear-gradient(135deg,rgba(2,6,23,0.94),rgba(15,23,42,0.94))]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-white font-extrabold text-lg">
                        Ticketless entry, audit-ready.
                      </div>
                      <div className="text-white/70 text-sm mt-1">
                        Enrollment → permission linking → gate verification → outcomes
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-white/10 text-white grid place-items-center">
                      <Play className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-white/60">
                    If video doesn’t play: add your MP4 at <span className="font-semibold text-white/80">/public/videos/demo.mp4</span>.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Benefits"
            title="Designed to reduce friction at entry"
            subtitle="Ticketless identity can improve throughput and reduce manual checks—without asking users to carry anything extra."
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefitCards.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} {...fadeUp(idx * 0.05)}>
                  <Card className="p-6 hover:shadow-md transition">
                    <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-4 text-xl font-extrabold">{b.title}</div>
                    <p className="mt-2 text-slate-600 leading-relaxed">{b.text}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY (minimum 6 images, all show properly) */}
      <section className="py-14 sm:py-18 bg-[radial-gradient(1100px_circle_at_20%_10%,rgba(2,6,23,0.06),transparent_55%)] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visuals"
            title="Cinematic, pilot-ready deployments"
            subtitle="A space-grade aesthetic for a privacy-first identity platform."
            align="center"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 6).map((g, idx) => (
              <motion.div key={g.alt} {...fadeUp(idx * 0.04)}>
                <div className="rounded-[26px] overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[230px] sm:h-[250px] object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/gallery"
              className="inline-flex items-center text-sm font-semibold text-slate-900 hover:underline"
            >
              View more visuals <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-14 sm:py-18 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solutions"
            title="One platform. Multiple industries."
            subtitle="Pick a use case to see a pilot-ready pain → solution → outcome view."
            align="center"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="p-4 lg:col-span-1">
              <div className="text-sm font-bold text-slate-900 px-2 py-2">Select a use case</div>

              <div className="mt-2 space-y-2">
                {useCaseList.map((u) => {
                  const Icon = useCaseIcons[u.id] ?? Layers;
                  const isActive = u.id === active;
                  return (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setActive(u.id)}
                      className={
                        "w-full text-left rounded-2xl px-3 py-3 transition border " +
                        (isActive
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white hover:bg-slate-50 border-slate-200 text-slate-900")
                      }
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={
                            "h-10 w-10 rounded-2xl grid place-items-center " +
                            (isActive ? "bg-white/15" : "bg-slate-100")
                          }
                        >
                          <Icon className={"h-5 w-5 " + (isActive ? "text-white" : "text-slate-900")} />
                        </div>
                        <div>
                          <div className="font-extrabold leading-tight">{u.title}</div>
                          <div className={"text-xs mt-0.5 " + (isActive ? "text-white/80" : "text-slate-500")}>
                            Pilot scope ready
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 px-2">
                <Link
                  to="/use-cases"
                  className="inline-flex items-center text-sm font-semibold text-slate-900 hover:underline"
                >
                  View all use cases <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Card>

            <motion.div key={active} {...fadeUp(0)} className="lg:col-span-2">
              <Card className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                      Selected
                    </div>
                    <div className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
                      {activeUseCase?.title}
                    </div>
                  </div>
                  <Button to="/partnership#form" size="md">
                    Discuss pilot <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <div className="font-bold">Pain</div>
                    <ul className="mt-2 space-y-2 text-slate-600">
                      {activeUseCase?.pain?.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold">Solution</div>
                    <ul className="mt-2 space-y-2 text-slate-600">
                      {activeUseCase?.solution?.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold">Outcome</div>
                    <ul className="mt-2 space-y-2 text-slate-600">
                      {activeUseCase?.outcome?.map((o, i) => (
                        <li key={i}>• {o}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white grid place-items-center">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900">Privacy-first deployment note</div>
                      <div className="mt-1 text-sm text-slate-600 leading-relaxed">
                        Deployments can be designed to avoid storing raw images and instead use encrypted templates/vectors,
                        with permission-based access and audit-friendly outcomes.
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="A 4-step flow for pilots"
            subtitle="Keep it simple at the gate. Keep it controlled in policy and permissions."
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howSteps.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(i * 0.05)}>
                <Card className="p-6 h-full">
                  <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Step {i + 1}
                  </div>
                  <div className="mt-2 text-lg font-extrabold">{s.title}</div>
                  <p className="mt-2 text-slate-600 leading-relaxed">{s.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button to="/how-it-works" variant="secondary" size="lg">
              See the full workflow <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST / SECURITY */}
      <section className="py-14 sm:py-18 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Security & Privacy"
            title="Trust built into the design"
            subtitle="Built to be consent-based, minimize stored data, and reduce spoofing risk."
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <motion.div {...fadeUp(0)}>
              <Card className="p-6">
                <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center">
                  <LockKeyhole className="h-6 w-6" />
                </div>
                <div className="mt-4 text-xl font-extrabold">Encrypted templates</div>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Designed to avoid raw image storage and rely on encrypted templates/vectors.
                </p>
              </Card>
            </motion.div>

            <motion.div {...fadeUp(0.06)}>
              <Card className="p-6">
                <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="mt-4 text-xl font-extrabold">Consent & permissions</div>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Access checks are linked to valid permissions (trip/pass/booking) and deployment policy.
                </p>
              </Card>
            </motion.div>

            <motion.div {...fadeUp(0.12)}>
              <Card className="p-6">
                <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center">
                  <ScanFace className="h-6 w-6" />
                </div>
                <div className="mt-4 text-xl font-extrabold">Anti-spoof readiness</div>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Liveness detection and spoof checks can be included depending on camera capability.
                </p>
              </Card>
            </motion.div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button to="/security" size="lg">
              Read Security & Privacy <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fade}>
            <Card className="p-8 sm:p-10 bg-[radial-gradient(1100px_circle_at_20%_10%,rgba(2,6,23,0.08),transparent_55%)]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Start with a pilot
                  </div>
                  <div className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                    Build a ticketless lane with measurable outcomes
                  </div>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Define scope, privacy policy, success metrics, and rollout plan. We start controlled—then scale.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button to="/partnership" size="lg">
                    Request Pilot <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button to="/investors" size="lg" variant="secondary">
                    Investor overview
                  </Button>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="font-extrabold text-slate-900">1) Scope</div>
                  <div className="text-sm text-slate-600 mt-1">Choose lanes/venues and define consent policy.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="font-extrabold text-slate-900">2) Metrics</div>
                  <div className="text-sm text-slate-600 mt-1">Throughput, fraud reduction, ops time saved.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="font-extrabold text-slate-900">3) Expand</div>
                  <div className="text-sm text-slate-600 mt-1">Scale based on pilot results and readiness.</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
