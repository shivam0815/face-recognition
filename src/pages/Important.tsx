
import Seo from "../components/Seo";
import PageRenderer from "../components/PageRenderer";
import { site } from "../data/siteData";
import { importantPage } from "../content/important";

export default function Important() {
  return (
    <>
      <Seo
        title="Core Logic | S-PassX 360"
        description={importantPage.description}
        canonical={`${site.baseUrl}/important`}
      />
      <PageRenderer page={importantPage} />
    </>
  );
}
