import { motion } from "framer-motion";
import { ScanFace, LockKeyhole, Link2, DoorOpen } from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { howSteps, site } from "../data/siteData";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
  viewport: { once: true, amount: 0.2 },
});

export default function HowItWorks() {
  const icons = [ScanFace, LockKeyhole, Link2, DoorOpen];

  return (
    <>
      <Seo
        title="How it Works — Face Travel"
        description="A simple four-step flow: enroll, encrypt, link permissions, and verify entry."
        canonical={`${site.baseUrl}/how-it-works`}
      />

      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Simple for users, controlled for operators"
            subtitle="The core flow is designed to be quick at the gate, while keeping consent and permissions in the loop."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {howSteps.map((s, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div key={s.title} {...fadeUp(idx * 0.05)}>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-500">
                          Step {idx + 1}
                        </div>
                        <div className="text-xl font-bold">{s.title}</div>
                        <p className="mt-2 text-slate-600 leading-relaxed">
                          {s.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10">
            <Card className="p-6 sm:p-8">
              <div className="font-bold text-lg">Visual flow (concept)</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {howSteps.map((s, i) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-slate-200 p-4 text-center"
                  >
                    <div className="text-sm font-semibold text-slate-500">
                      {i + 1}
                    </div>
                    <div className="mt-1 font-bold">{s.title}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Final deployment details depend on the partner environment,
                hardware, and local policy requirements.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
