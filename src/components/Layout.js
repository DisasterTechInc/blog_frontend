import React from "react";
import { useLocation } from "@reach/router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "assets/sass/app.scss";
import { useSiteMetadata } from "hooks/use-site-metadata";

export const Head = () => {
  const { title } = useSiteMetadata();
  return <title>{title}</title>;
};

export const Layout = ({ name, children }) => {
  const location = useLocation();
  const sitePaddingTop = `${76 + 60}px`; // Header Height + 60px
  return (
    <>
      <Head />
      <div
        className={`site site-${name}`}
        style={{
          paddingTop: location.pathname === "/" ? "0px" : sitePaddingTop,
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
