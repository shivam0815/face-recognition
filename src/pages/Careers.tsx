
import Seo from "../components/Seo";
import PageRenderer from "../components/PageRenderer";
import { site } from "../data/siteData";
import { careersPage } from "../content/careers";

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers | Build the Future of Identity | S-PassX 360"
        description={careersPage.description}
        canonical={`${site.baseUrl}/careers`}
      />
      <PageRenderer page={careersPage} />
    </>
  );
}
