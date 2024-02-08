import React from "react";
import { navigate } from "gatsby";
import { Layout } from "components/Layout";
import { Section } from "components/Section";
import { AppButton } from "../components/AppButton";
import Graphics from "assets/images/graphics__404.svg";

export default function NotFound() {
  return (
    <>
      <Layout is404={true} name={"404"}>
        <div className="site-main">
          <Section sectionClass={"text-center flex-grow-1"}>
            <img src={Graphics} className="img-fluid mb-4" alt="" />
            <h5 className="lrg mb-3">This Page Must Have Evacuated</h5>
            <p className="text-xl mb-5">
              The page you are looking for is not available.
            </p>
            <AppButton className="primary" onClick={() => navigate("/")}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="me-2"
              >
                <path
                  fill="#ffffff"
                  d="M3.7522 16.4999H6.7522H11.2522H14.2522C15.0794 16.4999 15.7522 15.8272 15.7522 14.9999V8.24994C15.7522 8.05119 15.6734 7.85994 15.5324 7.71969L9.53245 1.71969C9.2392 1.42644 8.7652 1.42644 8.47195 1.71969L2.47195 7.71969C2.33095 7.85994 2.2522 8.05119 2.2522 8.24994V14.9999C2.2522 15.8272 2.92495 16.4999 3.7522 16.4999ZM7.5022 14.9999V11.2499H10.5022V14.9999H7.5022ZM3.7522 8.56044L9.0022 3.31044L14.2522 8.56044L14.2529 14.9999H12.0022V11.2499C12.0022 10.4227 11.3294 9.74994 10.5022 9.74994H7.5022C6.67495 9.74994 6.0022 10.4227 6.0022 11.2499V14.9999H3.7522V8.56044Z"
                />
              </svg>
              Go to homepage
            </AppButton>
          </Section>
        </div>
      </Layout>
    </>
  );
}
