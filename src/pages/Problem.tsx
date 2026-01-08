import React from "react";
import Seo from "../components/Seo";
import PageRenderer from "../components/PageRenderer";
import { site } from "../data/siteData";
import { problemPage } from "../content/problem";

export default function Problem() {
  return (
    <>
      <Seo
        title="Problem Analysis | S-PassX 360"
        description={problemPage.description}
        canonical={`${site.baseUrl}/problem`}
      />
      <PageRenderer page={problemPage} />
    </>
  );
}
