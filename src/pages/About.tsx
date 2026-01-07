import { motion } from "framer-motion";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { site } from "../data/siteData";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
  viewport: { once: true, amount: 0.2 },
});

export default function About() {
  return (
    <>
      <Seo
        title="About — Face-Based Travel Technology"
        description="We build consent-based, ticketless identity verification for travel and access."
        canonical={`${site.baseUrl}/about`}
      />

      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="Faster entry, lower fraud, and better passenger experience"
            subtitle="Travel and access systems struggle with queues, manual verification, and misuse. We are building a privacy-first approach for pilots and partnerships."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <motion.div {...fadeUp(0)}>
              <Card className="p-6">
                <div className="font-bold text-lg">The problem</div>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>• Long queues at checkpoints and gates</li>
                  <li>• Fraud tickets, identity misuse, tailgating</li>
                  <li>• Manual verification costs and inconsistency</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div {...fadeUp(0.05)}>
              <Card className="p-6">
                <div className="font-bold text-lg">Our solution</div>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>• Ticketless identity verification in seconds</li>
                  <li>• Consent + permission based access control</li>
                  <li>• Pilot-first deployments with clear scope</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <Card className="p-6">
                <div className="font-bold text-lg">Vision (5–10 years)</div>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  A unified identity layer that makes travel and venue access
                  seamless—while keeping user consent and data minimization at
                  the core.
                </p>
              </Card>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <div className="font-bold text-lg">Mission & values</div>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>• Privacy-first design (minimize what’s stored)</li>
                <li>• Consent-based verification</li>
                <li>• Security by default (encryption + auditability)</li>
                <li>• Pilot-driven execution and measurable outcomes</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="font-bold text-lg">Founder message</div>
              <p className="mt-3 text-slate-600 leading-relaxed">
                We believe entry should feel effortless. By designing for
                consent, security, and real-world operations, we aim to help
                operators reduce friction while improving safety and throughput.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
