export const notSurveillancePage = {
  title: "Why This System Is Not Surveillance",
  description:
    "A clear, technical and ethical distinction between surveillance systems and consent-based face identity verification.",

  sections: [
    {
      id: "core-distinction",
      heading: "Core Distinction",
      type: "text",
      text:
        "Surveillance systems are designed to watch people continuously. This system is designed to verify identity momentarily for access. The intent, architecture and operation are fundamentally different."
    },

    {
      id: "event-based",
      heading: "Event-Based, Not Continuous Monitoring",
      type: "bullets",
      items: [
        "Surveillance tracks individuals all the time",
        "This system activates only at specific travel checkpoints",
        "No background scanning and no passive observation",
        "If there is no travel event, the system does nothing"
      ]
    },

    {
      id: "user-initiated",
      heading: "User-Initiated, Not Authority-Initiated",
      type: "bullets",
      items: [
        "Surveillance is imposed by authorities",
        "This system is voluntarily activated by the traveler",
        "Users opt in and can opt out at any time",
        "Control remains with the individual"
      ]
    },

    {
      id: "purpose-bound",
      heading: "Purpose-Bound to Travel Access Only",
      type: "bullets",
      items: [
        "Surveillance systems collect data for open-ended use",
        "This system is technically restricted to entry validation",
        "Journey authorization and exit confirmation only",
        "It cannot be used for behavior tracking or profiling"
      ]
    },

    {
      id: "no-location",
      heading: "No Location Tracking",
      type: "bullets",
      items: [
        "Surveillance systems map where people go",
        "This system does not track routes or dwell time",
        "Only a single access decision is recorded",
        "There is no concept of following a person"
      ]
    },

    {
      id: "no-watchlist",
      heading: "No Centralized Watchlist Scanning",
      type: "bullets",
      items: [
        "Surveillance scans everyone against databases",
        "This system checks only enrolled users",
        "Non-users are completely invisible",
        "If you are not enrolled, you are not scanned"
      ]
    },

    {
      id: "no-images",
      heading: "No Facial Image Retention",
      type: "bullets",
      items: [
        "Surveillance stores facial images",
        "This system stores encrypted biometric templates",
        "Templates cannot be reused outside the system",
        "Secondary or hidden use is technically blocked"
      ]
    },

    {
      id: "no-behavior",
      heading: "No Behavioral Intelligence Creation",
      type: "bullets",
      items: [
        "Surveillance builds behavior and lifestyle profiles",
        "This system does not analyze habits or routines",
        "No scoring, ranking or classification of individuals",
        "The system never learns about a person's life"
      ]
    },

    {
      id: "transparency",
      heading: "Transparent & Auditable Usage",
      type: "bullets",
      items: [
        "Surveillance often operates invisibly",
        "Users receive access logs and timestamps",
        "Operator identity is visible",
        "Every action is traceable"
      ]
    },

    {
      id: "firewalls",
      heading: "Legal & Technical Firewalls",
      type: "bullets",
      items: [
        "Strong legal boundaries prevent repurposing",
        "Technical controls block expansion into monitoring",
        "Any misuse would require full architectural redesign",
        "Misuse is technically infeasible, not just illegal"
      ]
    },

    {
      id: "litmus",
      heading: "Simple Litmus Test",
      type: "text",
      text:
        "Surveillance watches you even when you do nothing. This system acts only when you choose to travel."
    },

    {
      id: "final-clarity",
      heading: "Final Clarity Statement",
      type: "text",
      text:
        "This system does not observe people. It recognizes consented identity at a single moment to enable access. Replacing tickets and IDs with face-based identity is a convenience and security upgrade, not a monitoring mechanism."
    }
  ]
};
