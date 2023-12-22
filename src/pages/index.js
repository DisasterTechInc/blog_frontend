import * as React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className="text-xxl">Home Page</h1>
      </Layout>
    </>
  );
}
