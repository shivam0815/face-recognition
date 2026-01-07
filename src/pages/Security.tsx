import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Accordion from "../components/Accordion";
import { securityFaq, site } from "../data/siteData";

export default function Security() {
  return (
    <>
      <Seo
        title="Security & Privacy — Face Travel"
        description="Consent-based, privacy-first design principles: encrypted templates, minimal logs, and anti-spoof checks."
        canonical={`${site.baseUrl}/security`}
      />

      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Security & Privacy"
            title="Trust is the product"
            subtitle="Deployments are designed to minimize data exposure, use encrypted templates/vectors, and enable permission-based access."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="p-6">
              <div className="font-bold text-lg">Data minimization</div>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Designed to avoid storing raw face images. Instead, verification
                can rely on encrypted templates/vectors that do not function as
                photos.
              </p>
            </Card>

            <Card className="p-6">
              <div className="font-bold text-lg">Consent-based access</div>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Identity checks are tied to explicit permission and valid travel/
                entry rights. Users can be provided opt-out and deletion paths
                based on policy.
              </p>
            </Card>

            <Card className="p-6">
              <div className="font-bold text-lg">Anti-fraud</div>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Liveness detection and spoof checks help reduce attempts with
                photos, videos, or masks—depending on hardware capabilities.
              </p>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <div className="font-bold text-lg">What we log (minimal)</div>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>• Verification outcome (pass/fail)</li>
                <li>• Timestamp, lane/device identifier</li>
                <li>• Permission reference (trip/pass/event)</li>
                <li>• Optional audit trail for investigations</li>
              </ul>
              <p className="mt-3 text-sm text-slate-500">
                Final logging policy depends on partner requirements and local
                regulations.
              </p>
            </Card>

            <Card className="p-6">
              <div className="font-bold text-lg">FAQs</div>
              <div className="mt-4">
                <Accordion items={securityFaq} />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
