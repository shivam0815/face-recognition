
import Seo from "../components/Seo";
import PageRenderer from "../components/PageRenderer";
import { site } from "../data/siteData";
import { ethicsPage } from "../content/ethics";

export default function Ethics() {
  return (
    <>
      <Seo
        title="Ethical & Legal Safeguards | S-PassX 360"
        description={ethicsPage.description}
        canonical={`${site.baseUrl}/ethics`}
      />
      <PageRenderer page={ethicsPage} />
    </>
  );
}
