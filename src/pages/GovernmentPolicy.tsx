
import Seo from "../components/Seo";
import PageRenderer from "../components/PageRenderer";
import { site } from "../data/siteData";
import { governmentPolicyPage } from "../content/governmentPolicy";

export default function GovernmentPolicy() {
  return (
    <>
      <Seo
        title="Government & Policy DPR | S-PassX 360"
        description={governmentPolicyPage.description}
        canonical={`${site.baseUrl}/government-policy`}
      />
      <PageRenderer page={governmentPolicyPage} />
    </>
  );
}
