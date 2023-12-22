import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../assets/sass/app.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
