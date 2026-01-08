export const roadmapPage = {
  title: "2–3 Year Delivery Roadmap",
  description:
    "A realistic, phased and policy-aware roadmap answering a critical question for governments and institutions: Can FacePass Travel be delivered responsibly in 2–3 years?",

  sections: [
    {
      id: "purpose",
      heading: "Purpose of This Roadmap",
      type: "text",
      text:
        "This roadmap addresses a key concern raised by governments and public institutions: whether a face-based digital travel identity system can be realistically delivered within 2–3 years without creating surveillance risk, legal overreach, or operational failure. The roadmap separates guaranteed deliverables, conditional outcomes, and explicit non-promises."
    },

    {
      id: "audience",
      heading: "Intended Audience",
      type: "bullets",
      items: [
        "Government decision-makers",
        "Transport authorities",
        "Smart City authorities",
        "Public–Private Partnership (PPP) partners",
        "Infrastructure and technology committees"
      ]
    },

    {
      id: "year1",
      heading: "Year 1: Foundation & Proof at Scale",
      type: "subsections",
      items: [
        {
          title: "Strategic Objective",
          content: [
            "Establish FacePass Travel as a lawful, limited-scope public infrastructure.",
            "Prove viability without creating a nationwide surveillance system."
          ]
        },
        {
          title: "What We Deliver",
          content: [
            "Consent-first identity usage framework",
            "Data minimization and purpose limitation design",
            "Alignment with existing ID laws and transport regulations",
            "Core FacePass identity platform (MVP+)",
            "Opt-in face-based digital identity creation",
            "Encrypted identity tokens with no raw image storage",
            "Liveness detection and anti-spoofing enforcement",
            "Pilot deployments in 1–2 airports or metro systems",
            "Controlled railway station or smart corridor pilots",
            "Government-controlled data architecture",
            "Logical separation of biometric processing and service access",
            "Audit-ready logging and government visibility dashboards",
            "Public communication and citizen trust campaigns",
            "Clear opt-in and opt-out mechanisms"
          ]
        },
        {
          title: "What We Do NOT Promise",
          content: [
            "No nationwide rollout",
            "No compulsory citizen usage",
            "No integration with law enforcement databases",
            "No replacement of national ID systems"
          ]
        },
        {
          title: "Dependencies",
          content: [
            "Pilot permissions from concerned ministries",
            "Local infrastructure readiness",
            "Regulatory sandbox approvals"
          ]
        }
      ]
    },

    {
      id: "year2",
      heading: "Year 2: Multi-Sector Expansion & Optimization",
      type: "subsections",
      items: [
        {
          title: "Strategic Objective",
          content: [
            "Demonstrate interoperability across sectors while maintaining strict privacy and governance control."
          ]
        },
        {
          title: "What We Deliver",
          content: [
            "Integration across airports, railways and metro systems",
            "Inter-city and intra-city travel use cases",
            "Sectoral rollouts for hotels, events, stadiums and corporate travel",
            "Identity federation layer with sector-specific permissions",
            "Time-bound and location-bound identity tokens",
            "Performance hardening for peak traffic loads",
            "Failover and fallback mechanisms",
            "Independent third-party security audits",
            "Privacy impact assessments"
          ]
        },
        {
          title: "What We Do NOT Promise",
          content: [
            "No mandatory citizen enrollment",
            "No real-time tracking or movement profiling",
            "No centralized citizen behavior database"
          ]
        },
        {
          title: "Dependencies",
          content: [
            "Inter-department coordination",
            "Budget approvals",
            "Participation from transport and service operators"
          ]
        }
      ]
    },

    {
      id: "year3",
      heading: "Year 3: National Readiness & Policy Maturity",
      type: "subsections",
      items: [
        {
          title: "Strategic Objective",
          content: [
            "Make FacePass Travel nationally deployable while remaining optional, regulated, and rights-respecting."
          ]
        },
        {
          title: "What We Deliver",
          content: [
            "National interoperability framework",
            "Standardized APIs for public and private operators",
            "Certification and compliance programs",
            "Smart City and urban infrastructure integration",
            "Mobility-as-a-Service alignment",
            "Parking, toll and public venue access enablement",
            "Long-term governance model",
            "Oversight committees",
            "Grievance redressal mechanisms",
            "Data retention and deletion enforcement",
            "Economic and impact reporting",
            "Cost savings analysis",
            "Fraud reduction metrics",
            "Citizen convenience indices"
          ]
        },
        {
          title: "What We Do NOT Promise",
          content: [
            "No replacement of passports or citizenship proof",
            "No facial recognition policing",
            "No permanent biometric database"
          ]
        },
        {
          title: "Dependencies",
          content: [
            "National-level policy notification",
            "Smart City infrastructure maturity",
            "Cross-state coordination"
          ]
        }
      ]
    },

    {
      id: "constraints",
      heading: "Cross-Cutting Constraints & Honest Limits",
      type: "subsections",
      items: [
        {
          title: "Depends on Government Approval",
          content: [
            "Scale of deployment",
            "Sector prioritization",
            "Regulatory exemptions or mandates"
          ]
        },
        {
          title: "Depends on Infrastructure Readiness",
          content: [
            "Camera quality and placement",
            "Network reliability",
            "Power and redundancy systems"
          ]
        },
        {
          title: "Explicitly Out of Scope",
          content: [
            "Surveillance or intelligence usage",
            "Health or financial profiling",
            "Commercial resale of identity data"
          ]
        }
      ]
    },

    {
      id: "summary",
      heading: "Summary for Decision-Makers",
      type: "bullets",
      items: [
        "FacePass Travel is deliverable in 2–3 years only through phased, consent-based deployment",
        "Risk is managed through limited pilots, audits, and opt-in usage",
        "Success depends as much on policy clarity as on technology",
        "This roadmap prioritizes trust before scale"
      ]
    }
  ]
};
