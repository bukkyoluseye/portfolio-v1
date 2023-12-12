import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const SEO = (props: { title?: string; description?: string }) => {
  const { title, description } = props;

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  let pathname = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <>
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />
      {/* <meta name="image" content={seo.image} />*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${title} | ${data.site.siteMetadata.title}`}
      />
      <meta
        name="twitter:url"
        content={`${data.site.siteMetadata.siteUrl}${pathname}`}
      />
      <meta
        name="twitter:description"
        content={description || data.site.siteMetadata.description}
      />
      {/* <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
    </>
  );
};

export default SEO;
