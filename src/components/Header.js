import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Nav } from "./Nav";

export const Header = () => {
  // GraphQL static query in component
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data?.site?.siteMetadata;

  return (
    <>
      {title}
      <Nav />
    </>
  );
};
