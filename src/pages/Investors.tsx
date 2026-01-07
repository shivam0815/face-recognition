import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Button from "../components/Button";
import Timeline from "../components/Timeline";
import { investorRoadmap, site } from "../data/siteData";

export default function Investors() {
  return (
    <>
      <Seo
        title="Investors — Face Travel"
        description="A ticketless identity layer for travel and access. Pilot-driven rollout with strong privacy and security foundations."
        canonical={`${site.baseUrl}/investors`}
      />

      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investors"
            title="A practical path from pilot to platform"
            subtitle="This page summarizes the opportunity at a high level. Detailed metrics and pilots will validate scale."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="p-6">
              <div className="font-bold text-lg">Problem</div>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>• Queues and friction at entry points</li>
                <li>• Fraud and misuse in ticket-based flows</li>
                <li>• High manual verification costs</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="font-bold text-lg">Solution</div>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>• Consent-based identity verification</li>
                <li>• Permission-linked access (trip/pass/event)</li>
                <li>• Pilot-first deployments with reporting</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="font-bold text-lg">Market</div>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Travel, transit, hospitality, and venues all benefit from faster,
                safer entry. Initial focus: pilots with measurable outcomes.
              </p>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <div className="font-bold text-lg">Business model (examples)</div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="font-semibold">B2B SaaS</div>
                  <div className="text-sm text-slate-600 mt-1">
                    Per site / per lane pricing with support and reporting.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="font-semibold">Govt pilots</div>
                  <div className="text-sm text-slate-600 mt-1">
                    Pilot + expansion contracts based on outcomes.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="font-semibold">Enterprise</div>
                  <div className="text-sm text-slate-600 mt-1">
                    Integrations with existing booking/access systems.
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="font-bold text-lg">Roadmap</div>
              <div className="mt-4">
                <Timeline items={investorRoadmap} />
              </div>
            </Card>
          </div>

          <div className="mt-10">
            <Card className="p-8 sm:p-10">
              <div className="text-2xl font-extrabold tracking-tight">
                Interested in pilots or funding discussions?
              </div>
              <p className="mt-2 text-slate-600">
                We can share pilot scope templates, evaluation metrics, and deployment requirements.
              </p>
              <div className="mt-6">
                <Button to="/partnership#form" size="lg">
                  Contact for Investor / Pilot
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
