import * as React from "react";
import { navigate } from "gatsby";
import { Layout } from "components/Layout";
import Banner from "components/Banner";
import Logo from "assets/images/logo.svg";
import GraphicsIntro from "assets/images/graphics__home-page__section-intro.png";
import GraphicsCrypto from "assets/images/graphics__home-page__section-crypto.png";
import GraphicsVideo from "assets/images/graphics__home-page__section-video.png";
import { Section } from "components/Section";
import { useSiteMetadata } from "hooks/use-site-metadata";
import { AppButton } from "../components/AppButton";

export default function Home() {
  const { title } = useSiteMetadata();
  return (
    <>
      <Layout name="home">
        <Banner />
        <main className="site-main">
          <Section sectionClass={"section__intro text-center"}>
            <img src={Logo} alt={title} className="graphics" />
            <p className="text-xl mt-4 mb-3">
              Exercise Training & Incident Management tools to better
              <span className="weight-800 color-brand"> Prepare</span>,
              <span className="weight-800 color-brand"> Predict</span>, and
              <span className="weight-800 color-brand"> Decide</span>
            </p>
            <img
              src={GraphicsIntro}
              className="w-100 d-block mb-4 mb-md-0"
              alt=""
            />
            <AppButton
              className="primary md"
              onClick={() => navigate("/about")}
            >
              Learn More
            </AppButton>
          </Section>
          <Section sectionClass={""}>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="w-100 d-block" src={GraphicsCrypto} alt="" />
              </div>
              <div className="col-md-6">
                <h1>
                  Make your life easier with our Incident Management Workspace
                  and our Exercise Workspace
                </h1>
                <p className="m-0">
                  Manage incidents and exercises in one platform to prepare
                  through PRATUS' Incident Management Workspace and Exercise
                  Workspace. With our Incident Management Workspace, Disaster
                  and Crisis Managers are given situational awareness and
                  decision science tools in a collaborative, Microsoft Teams
                  integrated environment. With our Exercise Workspace, Master
                  Exercise Planners and Exercise staff members can plan,
                  collaborate, and execute every aspect of an exercise from
                  kick-off meetings to gathering data for After Action Reports.
                </p>
              </div>
            </div>
          </Section>
          <Section sectionClass={"section__teams-integration text-center"}>
            <h1>Microsoft Teams Integration</h1>
            <p className="mb-4">
              Pratus creates one communication channel between different
              services and all involves parties so that actions and messages can
              be immediately coordinatied., PRATUS is the only crisis resiliency
              management tool in the world build directly into Teams and within
              all of our partner, Microsoft's infrastructure.
            </p>
            <div className="button-group justify-content-center">
              <AppButton
                className="primary"
                onClick={() => navigate("/contact")}
              >
                Schedule a Demo
              </AppButton>
              <AppButton
                className="secondary"
                onClick={() => navigate("/about")}
              >
                Learn More
              </AppButton>
            </div>
            {/* <img src={GraphicsVideo} className="w-100 d-block" alt="" /> */}
          </Section>
          <Section sectionClass={"section__start-trial pb-0"}>
            <div className="inner">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <h1>Start using PRATUS today.</h1>
                  <AppButton className="primary">Start trial now</AppButton>
                </div>
                <div className="col-md-6 ms-auto mt-4 mt-md-0">
                  <ul className="list checked">
                    <li>Cloud-Based Software.</li>
                    <li>Microsoft Teams Integration.</li>
                    <li>
                      Incident Management and Exercise Management Workspace for
                      your convenience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </main>
      </Layout>
    </>
  );
}
