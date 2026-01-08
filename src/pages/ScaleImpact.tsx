import React from "react";
import Seo from "../components/Seo";
import PageRenderer from "../components/PageRenderer";
import { site } from "../data/siteData";
import { scaleImpactPage } from "../content/scaleImpact";

export default function ScaleImpact() {
  return (
    <>
      <Seo
        title="Scale & Impact | S-PassX 360"
        description={scaleImpactPage.description}
        canonical={`${site.baseUrl}/scale-impact`}
      />
      <PageRenderer page={scaleImpactPage} />
    </>
  );
}
