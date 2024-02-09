import React from "react";
import { Layout } from "components/Layout";
import { Section } from "components/Section";
import { Breadcrumb } from "components/Breadcrumb";

export default function Terms() {
  return (
    <Layout name="about">
      <Breadcrumb>
        <li className="active">Terms &amp; Conditions</li>
      </Breadcrumb>
      <Section>
        <h4 className="lrg m-0">Terms &amp; Conditions</h4>
      </Section>
      <main className="site-main"></main>
    </Layout>
  );
}
