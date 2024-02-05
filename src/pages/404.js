import React from "react";
import { navigate } from "gatsby";
import { Layout } from "components/Layout";
import { Section } from "components/Section";
import { AppButton } from "../components/AppButton";

export default function NotFound() {
  return (
    <>
      <Layout>
        <div className="site-main">
          <Section sectionClass={"text-center"}>
            <h2 className="lrg color-brand">Oops!</h2>
            <p className="color-white text-l weight-600 mb-5">
              The page you are looking for doesn't exist.
            </p>
            <AppButton className="primary" onClick={() => navigate("/")}>
              Back to Home
            </AppButton>
          </Section>
        </div>
      </Layout>
    </>
  );
}
