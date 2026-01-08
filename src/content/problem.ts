export const problemPage = {
  title: "Problem Analysis: Global and India",
  description:
    "A detailed analysis of why current travel systems fail to deliver seamless, secure, and scalable identity verification.",

  sections: [
    {
      id: "context",
      heading: "Project Context: FacePass Travel",
      type: "text",
      text:
        "FacePass Travel replaces tickets, cards, and physical IDs with a face-based digital travel identity, enabling seamless, contactless, and secure travel across airports, railways, metros, buses, hotels, and checkpoints."
    },

    {
      id: "global",
      heading: "Global Problem Analysis",
      type: "subsections",
      items: [
        {
          title: "Fragmented Travel Identity Systems",
          content: [
            "Travelers globally are required to carry multiple physical items: tickets, boarding passes, passports or IDs, access cards, visas, hotel keys, and loyalty cards.",
            "Each system operates in silos across airlines, airports, immigration, rail, and hotels, causing repeated verification and inefficiency.",
            "Lack of a single universal digital identity creates friction at every travel touchpoint."
          ]
        },
        {
          title: "Time-Consuming Verification and Queues",
          content: [
            "Manual ID checks and document scanning create long queues at airport check-in, boarding gates, immigration, security, railway stations, and metro entry points.",
            "Peak travel seasons amplify delays, missed connections, and traveler dissatisfaction."
          ]
        },
        {
          title: "Security and Fraud Risks",
          content: [
            "Physical tickets and IDs are vulnerable to loss, theft, duplication, and forgery.",
            "Impersonation and ticket transfer fraud remain major security concerns in global transportation systems."
          ]
        },
        {
          title: "Poor Contactless Readiness",
          content: [
            "Despite growing demand for touch-free travel, many systems still depend on physical document handling, fingerprint scanners, or card-based access.",
            "Inconsistent biometric adoption limits scalability and user trust."
          ]
        },
        {
          title: "High Operational Costs",
          content: [
            "Airlines, airports, and transit authorities incur high costs for staffing, ticketing hardware, fraud management, and dispute resolution.",
            "Inefficient verification increases operational expenditure and environmental impact."
          ]
        }
      ]
    },

    {
      id: "india",
      heading: "India-Specific Problem Analysis",
      type: "subsections",
      items: [
        {
          title: "Massive Passenger Volume",
          content: [
            "India handles some of the highest daily passenger volumes globally across railways, metros, buses, and airports.",
            "Existing systems struggle to deliver both scale and speed."
          ]
        },
        {
          title: "Dependency on Physical Proofs",
          content: [
            "Travelers depend on printed tickets, PDFs, Aadhaar, PAN, Voter ID, or passports.",
            "Loss or mismatch of documents leads to denial, delays, or manual intervention."
          ]
        },
        {
          title: "Infrastructure Bottlenecks",
          content: [
            "Crowded stations and terminals rely on manual ticket checks and human-dependent verification.",
            "Limited entry and exit points cause congestion, safety risks, and poor passenger experience."
          ]
        },
        {
          title: "Fraud and Ticket Misuse",
          content: [
            "Ticket resale, sharing, fake IDs, and unauthorized entry are common.",
            "Enforcement is inconsistent due to reliance on human checks."
          ]
        },
        {
          title: "Digital Divide and Usability Challenges",
          content: [
            "Systems dependent on apps, QR codes, OTPs, or SMS fail when phones are lost, batteries die, or networks are weak.",
            "A face-based identity removes device dependency."
          ]
        }
      ]
    },

    {
      id: "stakeholders",
      heading: "Stakeholder Pain Points",
      type: "bullets",
      items: [
        "Travelers face document burden, fear of loss, long queues, and repeated checks.",
        "Operators face slow passenger flow, high staffing costs, and revenue leakage.",
        "Government and authorities face security risks and inefficient identity audits."
      ]
    },

    {
      id: "impact",
      heading: "Impact of the Problem",
      type: "subsections",
      items: [
        {
          title: "On Travelers",
          content: [
            "Stressful journeys",
            "Delays and missed connections",
            "Reduced trust in transport systems"
          ]
        },
        {
          title: "On Transport Ecosystem",
          content: [
            "Congestion and inefficiency",
            "High operational overhead",
            "Limited scalability for future demand"
          ]
        },
        {
          title: "On National Growth (India)",
          content: [
            "Poor travel experience impacts tourism and business mobility",
            "Infrastructure underutilization due to process inefficiencies"
          ]
        }
      ]
    },

    {
      id: "core-problem",
      heading: "Core Problem Statement",
      type: "text",
      text:
        "Modern travel systems are built around physical documents and fragmented digital tools, not around the traveler’s identity. There is no unified, secure, and universally accepted face-based travel identity."
    },

    {
      id: "why-now",
      heading: "Why This Problem Matters Now",
      type: "bullets",
      items: [
        "Explosive growth in travel volume",
        "Rising security expectations",
        "Demand for frictionless and contactless experiences",
        "Readiness of AI and facial recognition technologies"
      ]
    }
  ]
};
