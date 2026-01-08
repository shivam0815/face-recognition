import React from "react";
import Seo from "../components/Seo";
import PageRenderer from "../components/PageRenderer";
import { site } from "../data/siteData";
import { roadmapPage } from "../content/roadmap";

export default function Roadmap() {
  return (
    <>
      <Seo
        title="Delivery Roadmap | S-PassX 360"
        description={roadmapPage.description}
        canonical={`${site.baseUrl}/roadmap`}
      />
      <PageRenderer page={roadmapPage} />
    </>
  );
}
