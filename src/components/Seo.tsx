import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
};

export default function Seo({ title, description, canonical }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
