
import Seo from "../components/Seo";
import PageRenderer from "../components/PageRenderer";
import { site } from "../data/siteData";
import { visionPage } from "../content/vision";

export default function Vision() {
  return (
    <>
      <Seo
        title="Vision | S-PassX 360"
        description={visionPage.description}
        canonical={`${site.baseUrl}/vision`}
      />
      <PageRenderer page={visionPage} />
    </>
  );
}
