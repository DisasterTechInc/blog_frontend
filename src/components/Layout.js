import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "assets/sass/app.scss";
import { useSiteMetadata } from "hooks/use-site-metadata";

export const Head = () => {
  const { title } = useSiteMetadata();
  return <title>{title}</title>;
};

export const Layout = ({ name, children, is404 = false }) => {
  return (
    <>
      <Head />
      {(!is404 && (
        <div className={`site ${(name && `site-${name}`) || ""}`}>
          <Header />
          {children}
          <Footer />
        </div>
      )) || (
        <>
          <div className={`site ${(name && `site-${name}`) || ""}`}>
            <Header />
            {children}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
