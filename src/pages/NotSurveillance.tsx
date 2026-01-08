import React from "react";
import Seo from "../components/Seo";
import PageRenderer from "../components/PageRenderer";
import { site } from "../data/siteData";
import { notSurveillancePage } from "../content/notSurveillance";

export default function NotSurveillance() {
  return (
    <>
      <Seo
        title="Why This Is Not Surveillance | S-PassX 360"
        description={notSurveillancePage.description}
        canonical={`${site.baseUrl}/not-surveillance`}
      />
      <PageRenderer page={notSurveillancePage} />
    </>
  );
}
