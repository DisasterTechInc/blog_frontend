import React from "react";
import { Layout } from "components/Layout";
import { Section } from "components/Section";
import { Breadcrumb } from "components/Breadcrumb";

export default function About() {
  return (
    <Layout name="about">
      <Breadcrumb>
        <li className="active">Pricing</li>
      </Breadcrumb>
      <Section>
        <h4 className="lrg m-0">Pricing</h4>
      </Section>
      <main className="site-main"></main>
    </Layout>
  );
}
