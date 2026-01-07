import type { AccordionItem } from "../components/Accordion";

export const site = {
  name: "S-PassX 360",
  baseUrl: "https://spassx360.com", // change later
  tagline: "Your Face. Your Pass. Everywhere.",
};

export const benefits = [
  {
    title: "No Ticket",
    text: "Entry and verification without paper or QR tickets for approved lanes.",
  },
  {
    title: "No Card / ID at Gate",
    text: "Reduces manual checks by verifying identity through secure matching.",
  },
  {
    title: "No Hardware for Users",
    text: "Passengers do not need special devices—only the entry point is enabled.",
  },
];

export const howSteps = [
  {
    title: "Register Face",
    text: "One-time enrollment at an approved counter or app-assisted kiosk.",
  },
  {
    title: "Encrypt Identity",
    text: "Face is converted into an encrypted template (not a stored photo).",
  },
  {
    title: "Link Travel / Access",
    text: "Access is mapped to a trip, booking, pass, or event permission.",
  },
  {
    title: "Verify Entry",
    text: "Camera verifies in seconds and allows entry for valid permissions.",
  },
];

export const useCaseList = [
  {
    id: "airports",
    title: "Airports & Airlines",
    pain: ["Queues at checkpoints", "Manual ID + boarding pass checks"],
    solution: [
      "Face-based entry for approved passengers",
      "Fast lane verification with audit logs",
    ],
    outcome: ["Faster throughput", "Lower manual workload", "Reduced misuse"],
  },
  {
    id: "rail",
    title: "Railways & Metro",
    pain: ["Crowd pressure at gates", "Ticket fraud and tailgating"],
    solution: [
      "Ticketless identity verification at gates",
      "Consent-based pass linking and validation",
    ],
    outcome: ["Smoother entry", "Fraud reduction", "Better crowd control"],
  },
  {
    id: "bus",
    title: "Bus Operators",
    pain: ["Ticketing delays", "Revenue leakage through fraud"],
    solution: [
      "Face verification at boarding points",
      "Auto validation against roster / bookings",
    ],
    outcome: ["Faster boarding", "Reduced leakage", "Cleaner operations"],
  },
  {
    id: "hotels",
    title: "Hotels",
    pain: ["Slow check-in", "Key card management"],
    solution: ["Face-based check-in option", "Access enabled for approved guests"],
    outcome: ["Faster check-in", "Better guest experience", "Operational savings"],
  },
  {
    id: "corporate",
    title: "Corporate Travel",
    pain: ["Manual verification", "Access management across vendors"],
    solution: ["Unified identity for travel + access", "Permission-based entry rules"],
    outcome: ["Policy compliance", "Better tracking", "Simplified access"],
  },
  {
    id: "events",
    title: "Events & Stadiums",
    pain: ["Counterfeit tickets", "Slow entry and bottlenecks"],
    solution: ["Face verification for ticket holders", "Anti-fraud checks"],
    outcome: ["Faster entry", "Lower fraud", "Better crowd safety"],
  },
];

export const securityFaq: AccordionItem[] = [
  {
    q: "Do you store face photos?",
    a: "Designed to avoid storing raw images. The system can store encrypted templates/vectors that are not usable as photos.",
  },
  {
    q: "Is user consent required?",
    a: "Yes. The model is designed around explicit consent and permission-based access. Users can opt out based on deployment policy.",
  },
  {
    q: "How do you prevent spoofing?",
    a: "Liveness detection and anti-spoof checks help reduce attempts using photos/videos/masks, depending on hardware capability.",
  },
  {
    q: "What data is logged?",
    a: "Typical logs include verification outcome, timestamp, lane/device ID, and consent/permission reference—kept minimal by design.",
  },
  {
    q: "Is this compliant with laws?",
    a: "The approach is written to be compliance-friendly (consent, minimization, encryption). Final compliance depends on deployment and jurisdiction.",
  },
  {
    q: "Can users control their data?",
    a: "In a full product rollout, users can view consent status and request deletion according to policy.",
  },
];

export const investorRoadmap = [
  { tag: "Now", title: "Pilot-ready website + partnerships", text: "Partner outreach, scoped pilots, and deployment requirements capture." },
  { tag: "Next", title: "Limited pilots", text: "Controlled lanes/venues with consent-based verification and reporting." },
  { tag: "Later", title: "Full platform", text: "Identity + consent dashboard, integrations, and scalable verification APIs." },
];
