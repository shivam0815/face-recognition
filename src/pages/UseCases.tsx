import { motion } from "framer-motion";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { site, useCaseList } from "../data/siteData";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
  viewport: { once: true, amount: 0.2 },
});

export default function UseCases() {
  return (
    <>
      <Seo
        title="Use Cases — Face Travel"
        description="Airports, metro, buses, hotels, corporate travel, and events—use cases where ticketless identity improves throughput."
        canonical={`${site.baseUrl}/use-cases`}
      />

      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Use cases"
            title="Solutions by industry"
            subtitle="Each use case follows a consistent structure: pain → solution → outcome. Start with a controlled pilot scope."
          />

          <div className="mt-6 flex flex-wrap gap-2">
            {useCaseList.map((u) => (
              <a
                key={u.id}
                href={`#${u.id}`}
                className="text-sm font-semibold px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition"
              >
                {u.title}
              </a>
            ))}
          </div>

          <div className="mt-10 space-y-6">
            {useCaseList.map((u, idx) => (
              <motion.div key={u.id} {...fadeUp(idx * 0.03)}>
                <Card className="p-6 sm:p-8" >
                  <div id={u.id} className="scroll-mt-24" />
                  <div className="text-2xl font-extrabold tracking-tight">
                    {u.title}
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    <div>
                      <div className="font-bold">Pain</div>
                      <ul className="mt-2 space-y-2 text-slate-600">
                        {u.pain.map((p, i) => (
                          <li key={i}>• {p}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold">Solution</div>
                      <ul className="mt-2 space-y-2 text-slate-600">
                        {u.solution.map((s, i) => (
                          <li key={i}>• {s}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold">Outcome</div>
                      <ul className="mt-2 space-y-2 text-slate-600">
                        {u.outcome.map((o, i) => (
                          <li key={i}>• {o}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
