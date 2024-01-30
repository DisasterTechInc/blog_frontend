import React from "react";
import { Layout } from "components/Layout";
import { Section } from "components/Section";
import { Breadcrumb } from "components/Breadcrumb";

export default function PrivacyPolicy() {
  return (
    <Layout name="about">
      <Breadcrumb>
        <li className="active">Privacy Policy</li>
      </Breadcrumb>
      <Section>
        <h4 className="lrg m-0">Privacy Policy</h4>
      </Section>
      <main className="site-main"></main>
    </Layout>
  );
}
