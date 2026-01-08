export const technologyPage = {
  title: "Face-Based Identity Architecture",
  description:
    "A human-centric, privacy-first architecture where a traveler’s face becomes the single source of truth across the entire travel ecosystem.",

  sections: [
    {
      id: "architecture-vision",
      heading: "Architecture Vision",
      type: "text",
      text:
        "FacePass Travel introduces a human-centric identity layer where a traveler’s face becomes the single source of truth across the entire travel ecosystem—replacing tickets, cards, QR codes, and physical IDs. The architecture is designed to be secure, scalable, interoperable, and privacy-first, suitable for global use and high-density markets like India."
    },

    {
      id: "layer-enrollment",
      heading: "1.1 Identity Enrollment Layer",
      type: "bullets",
      items: [
        "One-time face enrollment via authorized channels such as airports, railways, government partners, or verified applications",
        "Face is mapped to a unique digital travel identity",
        "Identity can be linked with travel bookings",
        "Government-approved ID references can be associated where permitted",
        "Permissions and validity rules are attached at enrollment",
        "Enrollment happens once; usage remains seamless thereafter"
      ]
    },

    {
      id: "layer-biometric",
      heading: "1.2 Biometric Identity Layer (Face Core)",
      type: "bullets",
      items: [
        "Facial features are converted into encrypted biometric templates",
        "Raw facial images are not stored or exposed",
        "Built-in liveness detection prevents spoofing",
        "Ensures one-person–one-identity enforcement",
        "Maintains high accuracy even in crowded environments",
        "This layer ensures the system verifies the person, not a document"
      ]
    },

    {
      id: "layer-consent",
      heading: "1.3 Consent & Privacy Layer",
      type: "bullets",
      items: [
        "User-controlled consent determines where face identity can be used",
        "Consent defines duration and purpose of access",
        "Supports revocation, expiration, and auditability",
        "Aligned with global data protection principles",
        "Compliant with India’s digital governance frameworks",
        "Privacy is built into the architecture, not added later"
      ]
    },

    {
      id: "layer-entitlement",
      heading: "1.4 Travel Entitlement Layer",
      type: "bullets",
      items: [
        "Maps face-based identity to travel rights and permissions",
        "Supports flight or train eligibility",
        "Controls entry and exit permissions",
        "Manages seat, coach, or zone-level access",
        "Replaces tickets and passes with real-time authorization",
        "If identity is valid, access is granted automatically"
      ]
    },

    {
      id: "layer-verification",
      heading: "1.5 Access & Verification Layer",
      type: "bullets",
      items: [
        "Face recognition at airport entry gates",
        "Verification at security and boarding points",
        "Railway and metro gate validation",
        "Bus terminals and hotel access control",
        "Verification occurs in milliseconds",
        "No scanning, tapping, or document showing required"
      ]
    },

    {
      id: "layer-interoperability",
      heading: "1.6 Interoperability & Integration Layer",
      type: "bullets",
      items: [
        "Integrates with airlines, railways, metros, and bus operators",
        "Connects with airports, stations, and hotels",
        "Interfaces with government and security systems",
        "Designed as a platform, not a closed ecosystem",
        "One face identity works across multiple operators and transport modes"
      ]
    },

    {
      id: "layer-audit",
      heading: "1.7 Audit, Intelligence & Control Layer",
      type: "bullets",
      items: [
        "Real-time monitoring of passenger flow",
        "Logging of all access events",
        "Detection of security exceptions",
        "Enables predictive crowd management",
        "Supports faster incident response",
        "Provides compliance-ready reporting",
        "Identity becomes actionable intelligence"
      ]
    },

    {
      id: "flow",
      heading: "High-Level Identity Flow",
      type: "bullets",
      items: [
        "Traveler enrolls face once",
        "Booking is linked to face identity",
        "Traveler arrives at checkpoint",
        "Face is recognized instantly",
        "System validates entitlement",
        "Access is granted automatically",
        "Face = Identity = Ticket = Access"
      ]
    },

    {
      id: "advantages",
      heading: "Architectural Advantages",
      type: "bullets",
      items: [
        "No dependency on phones, cards, or paper",
        "Frictionless and contactless travel experience",
        "Highly secure and fraud-resistant by design",
        "Scales effortlessly to millions of users",
        "Future-ready for multi-city and multi-country adoption"
      ]
    },

    {
      id: "principle",
      heading: "Core Architectural Principle",
      type: "text",
      text:
        "Travel systems should recognize people, not documents. FacePass Travel establishes a foundational identity layer on which the future of seamless travel can be built."
    }
  ]
};
