// src/pages/AntiMisuse.tsx

import Seo from "../components/Seo";
import PageRenderer from "../components/PageRenderer";
import { site } from "../data/siteData";
import { antiMisusePage } from "../content/antiMisuse";

export default function AntiMisuse() {
  return (
    <>
      <Seo
        title="Anti-Misuse | Why Hackers Cannot Misuse This | S-PassX 360"
        description={antiMisusePage.description}
        canonical={`${site.baseUrl}/anti-misuse`}
      />
      <PageRenderer page={antiMisusePage} />
    </>
  );
}
