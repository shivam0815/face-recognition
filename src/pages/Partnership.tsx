import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Button from "../components/Button";
import { site, useCaseList } from "../data/siteData";

type OrgType =
  | "Airport / Airline"
  | "Railway / Metro"
  | "Bus Operator"
  | "Hotel Chain"
  | "Govt / Smart City";

type Lead = {
  id: string;
  orgType: OrgType;
  orgName: string;
  contactName: string;
  email: string;
  phone: string;
  useCase: string;
  city: string;
  message: string;
  createdAt: string;
};

const LS_KEY = "face_travel_leads_v1";

function readLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Lead[]) : [];
  } catch {
    return [];
  }
}

function writeLeads(leads: Lead[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(leads));
}

export default function Partnership() {
  const useCaseOptions = useMemo(
    () => useCaseList.map((u) => u.title),
    []
  );

  const [orgType, setOrgType] = useState<OrgType>("Airport / Airline");
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [useCase, setUseCase] = useState(useCaseOptions[0] ?? "Airports & Airlines");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(readLeads().length);
  }, []);
const API_BASE = import.meta.env.VITE_API_BASE_URL;


const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!orgName.trim()) return toast.error("Organization name is required");
  if (!contactName.trim()) return toast.error("Contact person is required");
  if (!email.trim()) return toast.error("Email is required");
  if (!phone.trim()) return toast.error("Phone is required");
  if (!city.trim()) return toast.error("City is required");

  try {
    const res = await fetch(`${API_BASE}/api/partnership/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orgType,
        orgName: orgName.trim(),
        contactName: contactName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        useCase,
        city: city.trim(),
        message: message.trim(),
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return toast.error(data?.message || "Submit failed");
    }

    toast.success("Submitted! We will reach out soon.");

    setOrgName("");
    setContactName("");
    setEmail("");
    setPhone("");
    setCity("");
    setMessage("");
  } catch (err) {
    console.error(err);
    toast.error("Network error");
  }
};
;

  return (
    <>
      <Seo
        title="Pilot / Partnership — Face Travel"
        description="Request a pilot or partnership discussion for airports, metro, buses, hotels, and smart cities."
        canonical={`${site.baseUrl}/partnership`}
      />

      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pilot / Partnership"
            title="Start a pilot discussion"
            subtitle="Submit your details. This is frontend-only: your submission is stored locally in this browser (localStorage) for demo purposes."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="p-6 lg:col-span-2">
              <div id="form" className="scroll-mt-24" />
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold">Organization type</label>
                  <select
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value as OrgType)}
                  >
                    <option>Airport / Airline</option>
                    <option>Railway / Metro</option>
                    <option>Bus Operator</option>
                    <option>Hotel Chain</option>
                    <option>Govt / Smart City</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold">Organization name</label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g., XYZ International Airport"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Contact person</label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Name"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">City</label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g., Delhi"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@org.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Phone</label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91..."
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold">Use case</label>
                  <select
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                  >
                    {useCaseOptions.map((u) => (
                      <option key={u}>{u}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold">Message</label>
                  <textarea
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us your pilot scope, location, expected volume, timelines..."
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                  <div className="text-sm text-slate-600">
                    Demo leads stored locally: <span className="font-semibold">{count}</span>
                  </div>
                  <Button type="submit" size="lg">
                    Submit request
                  </Button>
                </div>
              </form>
            </Card>

            <Card className="p-6">
              <div className="font-bold text-lg">What happens next</div>
              <ol className="mt-3 space-y-3 text-slate-600">
                <li>
                  <span className="font-semibold text-slate-900">1)</span> We
                  confirm scope (lanes/venues, user flow, consent policy).
                </li>
                <li>
                  <span className="font-semibold text-slate-900">2)</span> We
                  define success metrics (throughput, fraud reduction, ops time).
                </li>
                <li>
                  <span className="font-semibold text-slate-900">3)</span> We run
                  a controlled pilot and share results + expansion plan.
                </li>
              </ol>

              <div className="mt-6 rounded-2xl border border-slate-200 p-4 bg-slate-50">
                <div className="font-semibold">Note</div>
                <div className="text-sm text-slate-600 mt-1">
                  This is frontend-only. To send leads to email/CRM, connect a
                  backend/API later.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
