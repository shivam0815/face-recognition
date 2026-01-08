export const useCaseDetails = {
  airports: {
    title: "Airports",
    pain: [
      "Multiple document checks",
      "Long queues at entry, security and boarding",
      "Identity mismatch and impersonation risk",
      "High manpower cost"
    ],
    usage: "Face becomes the single travel credential from terminal entry to aircraft boarding.",
    flow: [
      "Terminal entry gates: face-based access",
      "Check-in & baggage drop: identity-linked booking validation",
      "Security & boarding gates: real-time entitlement verification",
      "Arrival exit: automatic journey completion"
    ],
    security: [
      "Anti-spoofing and liveness detection",
      "Identity bound to booking and time window",
      "No ticket or QR misuse possible"
    ],
    roi: [
      "Faster passenger throughput",
      "Reduced staffing and fraud",
      "Improved airport capacity utilization"
    ]
  },

  railways: {
    title: "Railways",
    pain: [
      "Ticket sharing and resale",
      "Manual ticket checking",
      "Congested platforms"
    ],
    usage: "Passenger identity replaces printed or digital tickets.",
    flow: [
      "Station entry gates",
      "Platform access control",
      "Onboard verification (optional)",
      "Exit at destination"
    ],
    security: [
      "Identity-person binding prevents misuse",
      "Time and route-based entitlement"
    ],
    roi: [
      "Reduced fare evasion",
      "Lower TTE workload",
      "Faster station movement"
    ]
  },

  metro: {
    title: "Metro Systems",
    pain: [
      "Card issuance and recharge overhead",
      "Queue at ticket counters",
      "Card loss issues"
    ],
    usage: "Face replaces metro cards and QR tickets.",
    flow: [
      "Entry turnstiles",
      "Interchange gates",
      "Exit gates"
    ],
    security: [
      "One-person-one-entry enforcement",
      "Real-time fare entitlement check"
    ],
    roi: [
      "No card lifecycle cost",
      "Increased gate throughput"
    ]
  },

  bus: {
    title: "Bus Transport",
    pain: [
      "Cash handling",
      "Ticket leakage",
      "Manual passenger counting"
    ],
    usage: "Face-based boarding and fare authorization.",
    flow: [
      "Boarding door validation",
      "Depot-level reconciliation"
    ],
    security: [
      "Prevents unauthorized boarding"
    ],
    roi: [
      "Reduced revenue leakage",
      "Faster boarding times"
    ]
  },

  smartCities: {
    title: "Smart Cities",
    pain: [
      "Fragmented mobility systems",
      "Lack of unified access identity"
    ],
    usage: "Single identity across all city mobility services.",
    flow: [
      "Transport hubs",
      "Parking zones",
      "Public facilities"
    ],
    security: [
      "Event-based, non-surveillance design"
    ],
    roi: [
      "Optimized urban flow",
      "Lower infrastructure duplication"
    ]
  },

  hotels: {
    title: "Hotels",
    pain: [
      "ID verification delays",
      "Key card management"
    ],
    usage: "Face-based check-in and room access.",
    flow: [
      "Lobby entry",
      "Check-in desk",
      "Room access"
    ],
    security: [
      "Identity linked to stay duration"
    ],
    roi: [
      "Faster check-in",
      "Reduced card costs"
    ]
  },

  corporate: {
    title: "Corporate Travel",
    pain: [
      "Travel authorization misuse",
      "Expense reconciliation delays"
    ],
    usage: "Identity-based travel entitlement for employees.",
    flow: [
      "Office entry",
      "Travel hubs"
    ],
    security: [
      "Role and policy-based access"
    ],
    roi: [
      "Policy compliance",
      "Cost control"
    ]
  },

  events: {
    title: "Events & Stadiums",
    pain: [
      "Fake tickets",
      "Crowd surges"
    ],
    usage: "Face acts as the event ticket.",
    flow: [
      "Entry gates",
      "Zone access"
    ],
    security: [
      "One-time entry enforcement"
    ],
    roi: [
      "Fraud elimination",
      "Faster ingress"
    ]
  },

  healthcare: {
    title: "Healthcare (Non-Medical)",
    pain: [
      "Visitor verification issues"
    ],
    usage: "Identity-based visitor and staff access.",
    flow: [
      "Entry gates",
      "Restricted zones"
    ],
    security: [
      "Time-bound access"
    ],
    roi: [
      "Improved security control"
    ]
  },

  education: {
    title: "Education Campuses",
    pain: [
      "ID card misuse"
    ],
    usage: "Face-based campus access.",
    flow: [
      "Entry gates",
      "Hostels and exam halls"
    ],
    security: [
      "Identity-bound permissions"
    ],
    roi: [
      "Reduced card administration"
    ]
  },

  enterprise: {
    title: "Private Enterprises",
    pain: [
      "Access card management"
    ],
    usage: "Unified employee identity.",
    flow: [
      "Office entry",
      "Secure areas"
    ],
    security: [
      "Role-based access control"
    ],
    roi: [
      "Lower administrative overhead"
    ]
  },

  personal: {
    title: "Personal Identity (Opt-In)",
    pain: [
      "Multiple IDs for daily services"
    ],
    usage: "Voluntary identity for daily access needs.",
    flow: [
      "Transport",
      "Events"
    ],
    security: [
      "Full user control and consent"
    ],
    roi: [
      "Convenience without lock-in"
    ]
  }
};
