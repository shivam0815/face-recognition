export const antiMisusePage = {
  title: "Why Hackers Cannot Misuse Face-Based Travel Identity",
  description:
    "A zero-trust, identity-first security model designed to eliminate transferable attack surfaces and prevent misuse at scale.",

  sections: [
    {
      id: "philosophy",
      heading: "Security Philosophy",
      type: "text",
      text:
        "The system is designed on a zero-trust, identity-first security model. Stealing data does not grant access. Unlike tickets, cards, QR codes or passwords, there is nothing transferable to steal or reuse."
    },

    {
      id: "no-object",
      heading: "No Stealable Object Exists",
      type: "bullets",
      items: [
        "No tickets",
        "No cards",
        "No QR codes",
        "No passwords at the point of access",
        "A hacker cannot exploit what does not exist"
      ]
    },

    {
      id: "templates",
      heading: "Biometric Templates, Not Face Images",
      type: "bullets",
      items: [
        "The system does not store raw face photographs",
        "Facial data is converted into irreversible encrypted biometric templates",
        "Templates cannot be reconstructed into original face images",
        "Even in a breach scenario, stolen data is biologically useless"
      ]
    },

    {
      id: "liveness",
      heading: "Liveness Detection Blocks Spoofing",
      type: "bullets",
      items: [
        "Depth perception checks",
        "Micro-expression analysis",
        "Skin texture validation",
        "Motion-based verification",
        "Prevents spoofing via photos, videos, masks and AI-generated deepfakes"
      ]
    },

    {
      id: "living-identity",
      heading: "Identity Is Bound to a Living Person",
      type: "bullets",
      items: [
        "Physical presence of the enrolled individual is mandatory",
        "Identity cannot be shared, forwarded or resold",
        "Even identical twins have distinct biometric signatures",
        "Impersonation at scale is eliminated"
      ]
    },

    {
      id: "zero-trust",
      heading: "Zero Trust at Every Checkpoint",
      type: "bullets",
      items: [
        "Every access attempt is verified independently",
        "No session reuse or blanket trust",
        "Compromising one checkpoint does not affect the system",
        "Every gate treats every request as hostile until verified"
      ]
    },

    {
      id: "no-device",
      heading: "No Device Dependency",
      type: "bullets",
      items: [
        "No mobile apps required at gates",
        "No OTPs or SMS verification",
        "No credentials stored on user devices",
        "Eliminates phishing, SIM-swap and malware attack vectors"
      ]
    },

    {
      id: "context",
      heading: "Context-Aware Authorization",
      type: "bullets",
      items: [
        "Correct identity must be present",
        "Valid journey or entitlement must exist",
        "Correct location and checkpoint",
        "Correct time window",
        "A valid identity still fails outside permitted context"
      ]
    },

    {
      id: "distributed",
      heading: "Encrypted & Distributed Architecture",
      type: "bullets",
      items: [
        "Identity data is encrypted and segmented",
        "No single system holds identity and entitlement together",
        "Lateral movement by attackers is blocked by design",
        "Breaking one layer yields zero operational access"
      ]
    },

    {
      id: "monitoring",
      heading: "Continuous Monitoring & Anomaly Detection",
      type: "bullets",
      items: [
        "AI monitors unusual access patterns",
        "Repeated failures trigger automatic lockdowns",
        "Suspicious behavior is flagged in real time",
        "Threats are detected before damage occurs"
      ]
    },

    {
      id: "audit",
      heading: "Auditability & Forensic Readiness",
      type: "bullets",
      items: [
        "Every access attempt is immutably logged",
        "Tampering leaves permanent traces",
        "Supports instant investigation and rollback",
        "Attackers cannot hide inside the system"
      ]
    },

    {
      id: "core-truth",
      heading: "Core Security Truth",
      type: "text",
      text:
        "Hackers exploit transferable secrets. This system has none. Without passwords, cards, tickets or codes, there is nothing to steal, copy or resell."
    },

    {
      id: "final-summary",
      heading: "Final Security Summary",
      type: "text",
      text:
        "The system is secure not because it is harder to hack, but because it removes the attack surface entirely. Access is granted only when the right person is physically present, at the right place, at the right time, for the right journey."
    }
  ]
};
