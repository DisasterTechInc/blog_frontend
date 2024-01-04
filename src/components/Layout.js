import React from "react";
import { useLocation } from "@reach/router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../assets/sass/app.scss";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const Head = () => {
  const { title } = useSiteMetadata();
  return <title>{title}</title>;
};

export const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Head />
      <div
        className="site"
        style={{ paddingTop: location.pathname === "/" ? "0px" : "76px" }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
