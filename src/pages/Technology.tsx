import { Cpu, Cloud, Shield, Layers } from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { site } from "../data/siteData";

export default function Technology() {
  return (
    <>
      <Seo
        title="Technology — Face Travel"
        description="High-level overview of AI verification, infrastructure, and liveness protection. Built for pilots and integrations."
        canonical={`${site.baseUrl}/technology`}
      />

      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technology"
            title="A practical stack for real-world deployments"
            subtitle="This page stays high-level by design. Detailed specs depend on the pilot environment and partner requirements."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center">
                <Cpu className="h-6 w-6" />
              </div>
              <div className="mt-4 font-bold text-lg">AI Verification</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Face matching with configurable thresholds and audit-friendly
                outputs for operational reliability.
              </p>
            </Card>

            <Card className="p-6">
              <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center">
                <Shield className="h-6 w-6" />
              </div>
              <div className="mt-4 font-bold text-lg">Liveness</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Anti-spoof checks (photo/video/mask) depending on camera and
                deployment setup.
              </p>
            </Card>

            <Card className="p-6">
              <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center">
                <Cloud className="h-6 w-6" />
              </div>
              <div className="mt-4 font-bold text-lg">Cloud Infra</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Scalable services for identity templates, permission linking, and
                lane verification APIs.
              </p>
            </Card>

            <Card className="p-6">
              <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center">
                <Layers className="h-6 w-6" />
              </div>
              <div className="mt-4 font-bold text-lg">Integrations</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Works with booking/pass systems and access control flows via
                secure APIs.
              </p>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <div className="font-bold text-lg">Deployment approach</div>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>• Start with limited lanes / venues</li>
                <li>• Define consent and data policy</li>
                <li>• Measure throughput and fraud reduction</li>
                <li>• Expand scope based on results</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="font-bold text-lg">Future roadmap ideas</div>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Future iterations can explore portable identity proofs and
                stronger auditability. “Blockchain identity” is a possible
                research direction, depending on partner needs and feasibility.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
