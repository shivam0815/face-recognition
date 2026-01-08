export const securityPage = {
  title: "Security, Hacking & Misuse Prevention",
  description:
    "A risk-driven, zero-trust security architecture designed to prevent hacking, spoofing, misuse, and abuse at population scale.",

  sections: [
    {
      id: "purpose",
      heading: "Purpose of This Document",
      type: "text",
      text:
        "This section explains, in clear but technically credible terms, why the system cannot be easily hacked, misused, spoofed, or abused, and how it maintains trust at scale. It is written for government authorities, auditors, regulators, enterprise security teams, and investors. This is not marketing language; it focuses on risk thinking, failure scenarios, and defensive design."
    },

    {
      id: "philosophy",
      heading: "Core Security Philosophy",
      type: "bullets",
      items: [
        "Assume breach, not safety",
        "Trust nothing by default (Zero Trust)",
        "Verify every request, every time",
        "Limit data value even if stolen",
        "Design for failure, not perfection"
      ]
    },

    {
      id: "summary",
      heading: "High-Level Security Summary",
      type: "bullets",
      items: [
        "No single component can compromise the system",
        "Face data is never stored as usable images",
        "Identity verification is contextual and consent-driven",
        "System failure degrades safely, not catastrophically"
      ]
    },

    {
      id: "no-master-key",
      heading: "No Central Master Key Problem",
      type: "text",
      text:
        "There is no single database or control point that grants full access. Identity, permissions, and access are architecturally separated. Even internal administrators cannot bypass all layers. A successful attack would require breaching multiple independent systems simultaneously, which is operationally unrealistic and economically unattractive."
    },

    {
      id: "no-value",
      heading: "No Direct Value for Attackers",
      type: "bullets",
      items: [
        "Stolen data cannot be resold as identity proof",
        "Face templates are mathematical representations, not photos",
        "Templates cannot recreate a human face",
        "High effort with near-zero payoff for attackers"
      ]
    },

    {
      id: "context-bound",
      heading: "Context-Bound Authentication",
      type: "bullets",
      items: [
        "Verification works only at a specific location",
        "Only on an authorized device class",
        "Only within a defined time window",
        "Only for a specific service or journey",
        "Replay attacks fail by design",
        "Remote misuse becomes impossible"
      ]
    },

    {
      id: "spoofing",
      heading: "Why Face Spoofing Fails",
      type: "subsections",
      items: [
        {
          title: "Traditional Spoofing Methods",
          content: [
            "Printed photographs",
            "Mobile screen replays",
            "Recorded videos",
            "3D masks",
            "These succeed only in basic face recognition systems"
          ]
        },
        {
          title: "Layered Liveness Detection",
          content: [
            "Passive liveness: skin texture, light reflection, facial asymmetry",
            "Active liveness: eye movement, blink randomness, micro muscle motion",
            "Environmental verification: depth, shadows, light consistency",
            "Static or replayed faces cannot pass all layers simultaneously"
          ]
        },
        {
          title: "AI-Generated Face Failure",
          content: [
            "Lack of biological micro-movements",
            "Detectable AI artifacts at pixel and depth level",
            "Temporal inconsistencies expose synthetic inputs"
          ]
        }
      ]
    },

    {
      id: "database-theft",
      heading: "Why Database Theft Is Useless",
      type: "subsections",
      items: [
        {
          title: "No Raw Biometric Storage",
          content: [
            "No photos",
            "No videos",
            "No face scans",
            "Only encrypted biometric templates are stored"
          ]
        },
        {
          title: "One-Way Transformation",
          content: [
            "Templates are created using irreversible mathematical functions",
            "Cannot be reverse-engineered into a face",
            "Comparable to password hashing, but stronger"
          ]
        },
        {
          title: "Template Binding",
          content: [
            "Templates are bound to device class",
            "Bound to service type",
            "Bound to security context",
            "Stolen templates do not work elsewhere"
          ]
        }
      ]
    },

    {
      id: "zero-trust",
      heading: "Zero-Trust Architecture",
      type: "subsections",
      items: [
        {
          title: "Zero Trust Meaning",
          content: [
            "No device is trusted",
            "No user is trusted by default",
            "No network is trusted"
          ]
        },
        {
          title: "Layered Trust Zones",
          content: [
            "Device trust",
            "User presence",
            "Biometric verification",
            "Context validation",
            "Permission authorization",
            "Failure at any layer results in access denial"
          ]
        },
        {
          title: "Least Privilege Enforcement",
          content: [
            "Every access request has minimal scope",
            "Temporary permissions expire automatically"
          ]
        }
      ]
    },

    {
      id: "audit",
      heading: "Audit, Logging & Oversight",
      type: "subsections",
      items: [
        {
          title: "Full Audit Trails",
          content: [
            "Every verification attempt is logged",
            "Logs are immutable and time-stamped",
            "Tamper-evident storage"
          ]
        },
        {
          title: "Audits",
          content: [
            "Automated anomaly detection",
            "Manual audit access for authorities",
            "Independent third-party audits supported"
          ]
        },
        {
          title: "Transparency",
          content: [
            "Citizens can view their own usage history",
            "Clear records of when and why identity was used"
          ]
        }
      ]
    },

    {
      id: "misuse",
      heading: "Misuse Prevention (Internal & External)",
      type: "subsections",
      items: [
        {
          title: "Insider Threat Protection",
          content: [
            "No single administrator has full access",
            "Role-based access controls",
            "Continuous monitoring of admin behavior"
          ]
        },
        {
          title: "External Abuse Prevention",
          content: [
            "Rate limiting",
            "Geographic anomaly detection",
            "Pattern-based attack blocking"
          ]
        }
      ]
    },

    {
      id: "failure",
      heading: "What Happens If the System Fails",
      type: "subsections",
      items: [
        {
          title: "Graceful Degradation",
          content: [
            "System failure never blocks basic movement",
            "Fallback to manual or traditional verification"
          ]
        },
        {
          title: "No Lock-In Dependency",
          content: [
            "Users are never forced into face-only access",
            "Alternative methods always exist"
          ]
        },
        {
          title: "Safety Over Convenience",
          content: [
            "Low confidence results in denial",
            "False negatives are preferred over false positives"
          ]
        }
      ]
    },

    {
      id: "recovery",
      heading: "Disaster Recovery & Continuity",
      type: "subsections",
      items: [
        {
          title: "Redundant Infrastructure",
          content: [
            "Multiple geographic regions",
            "No single point of failure"
          ]
        },
        {
          title: "Backup & Restore",
          content: [
            "Encrypted backups",
            "Regular recovery drills",
            "Fast restoration timelines"
          ]
        },
        {
          title: "Cyber Incident Response",
          content: [
            "Immediate isolation of affected systems",
            "Automated credential invalidation",
            "Forensic investigation readiness"
          ]
        }
      ]
    },

    {
      id: "legal",
      heading: "Legal, Ethical & Regulatory Safeguards",
      type: "bullets",
      items: [
        "Explicit opt-in consent required",
        "No silent identification",
        "Data minimization enforced",
        "Automatic deletion policies",
        "GDPR-style principles",
        "India DPDP Act alignment",
        "Global privacy adaptability"
      ]
    },

    {
      id: "final",
      heading: "Final Trust Summary",
      type: "bullets",
      items: [
        "No mass surveillance",
        "No usable stolen data",
        "No spoofing at scale",
        "No single failure risk",
        "Full auditability",
        "Human dignity preserved"
      ]
    }
  ]
};
