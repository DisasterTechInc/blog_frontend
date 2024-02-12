import React, { useState } from "react";
import { Layout } from "components/Layout";
import { Section } from "components/Section";
import { Breadcrumb } from "components/Breadcrumb";
import Banner from "assets/images/banner__pratus.jpg";
import Logo from "assets/images/logo.svg";
import { AppButton } from "../components/AppButton";
import GraphicsIMW from "assets/images/graphics__services__imw.jpg";
import GraphicsEMW from "assets/images/graphics__services__emw.jpg";
import GraphicsDefense from "assets/images/graphics__services__defense.jpg";
import GraphicsEnergySector from "assets/images/graphics__services__energy-sector.jpg";
import { navigate } from "gatsby";
import IconDefense from "assets/images/icon__defense.svg";
import IconEnergy from "assets/images/icon__energy-sector.svg";
import IconCommercial from "assets/images/icon__commercial.svg";

export default function Pratus() {
  const [industry, setIndustry] = useState("Defense");
  return (
    <Layout name="pratus">
      <Breadcrumb>
        <li className="active">Pratus</li>
      </Breadcrumb>
      <section
        className="section__pratus-banner"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="container text-center flex-grow-1">
          <div className="row">
            <div className="col-md-12">
              <img className="logo" src={Logo} alt="" />
              <h2>
                Manage Incidents and Exercises in One Platform to Prepare,
                Predict, & Decide.
              </h2>
              <AppButton className={"primary"}>Sign Up Today</AppButton>
            </div>
          </div>
        </div>
      </section>
      <main className="site-main">
        <Section sectionClass="lrg">
          <div className="row">
            <div className="col-xl-6 pe-xl-5 mb-4 mb-md-5 mb-xl-0">
              <h3>Incident Management Workspace</h3>
              <p>
                The Incident Management Workspace in PRATUS™ uses advanced data
                analytics to give Disaster and Crisis Managers situational
                awareness and decision science tools in a collaborative,
                Microsoft Teams integrated environment. Disaster Tech's patented
                technology provides impact-based risk assessment to critical
                infrastructure with a focus on power outage prediction in
                support of business and mission continuity. Agencies and
                organizations use PRATUS to be smarter when preparing for,
                responding to, and recovering from crisis situations.
              </p>
              <div className="button-group mt-4 mt-md-5">
                <AppButton
                  className={"primary md"}
                  onClick={() => navigate("/pricing")}
                >
                  Purchase Now
                </AppButton>
                <AppButton
                  className="primary reverse md"
                  onClick={() => navigate("/contact")}
                >
                  Schedule a Demo
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-2 animate__arrow--right"
                  >
                    <path
                      d="M9.41083 15.1248L10.5892 16.3031L16.1783 10.7139L10.5892 5.12476L9.41083 6.30309L12.9883 9.88059H5V11.5473H12.9883L9.41083 15.1248Z"
                      fill="white"
                    />
                  </svg>
                </AppButton>
              </div>
            </div>
            <div className="col-xl-6 ps-xl-5">
              <img
                className="rounded w-100 d-block overflow-hidden"
                src={GraphicsIMW}
                alt=""
              />
            </div>
          </div>
          <div className="row p8--y pb-0">
            <div className="col-xl-6 order-xl-1 ps-xl-5 mb-4 mb-md-5 mb-xl-0">
              <h3>Exercise Management Workspace</h3>
              <p>
                The Exercise Management Workspace within PRATUS is used to plan,
                manage, and assess military and government exercises in a
                centralized and collaborative workspace environment. Master
                Exercise Planners and Exercise staff members can plan,
                collaborate, and execute every aspect of an exercise from
                kick-off meetings to gathering data for After Action Reports.
                Users can manage exercise, scenario- based events with Master
                Scenario Events List (MSEL) injects aligned to exercise
                objectives for user-based assessments, and view qualitative and
                quantitative analytics in real-time. Exercise Management
                Workspace serves as a comprehensive application for exercise
                control cells to validate plans, increase readiness, analyze
                trends, and fully understand the value of exercises by
                presenting DoD and organization leaders exercise performance
                data and information.
              </p>
              <div className="button-group mt-4 mt-md-5">
                <AppButton
                  className={"primary md"}
                  onClick={() => navigate("/pricing")}
                >
                  Purchase Now
                </AppButton>
                <AppButton
                  className="primary reverse md"
                  onClick={() => navigate("/contact")}
                >
                  Schedule a Demo
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-2 animate__arrow--right"
                  >
                    <path
                      d="M9.41083 15.1248L10.5892 16.3031L16.1783 10.7139L10.5892 5.12476L9.41083 6.30309L12.9883 9.88059H5V11.5473H12.9883L9.41083 15.1248Z"
                      fill="white"
                    />
                  </svg>
                </AppButton>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img
                className="rounded w-100 d-block overflow-hidden"
                src={GraphicsEMW}
                alt=""
              />
            </div>
          </div>
        </Section>
        <Section sectionClass="section__service-area lrg pt-0">
          <h1 className="text-center">Industries We Serve</h1>
          <div className="button-group justify-content-center mb-4 mb-md-5">
            <AppButton
              className={`md ${
                industry === "Defense" ? "primary" : "secondary"
              }`}
              onClick={() => setIndustry("Defense")}
            >
              <img className="me-2" src={IconDefense} alt="" />
              Defense
            </AppButton>
            <AppButton
              className={`md ${
                industry === "Energy Sector" ? "primary" : "secondary"
              }`}
              onClick={() => setIndustry("Energy Sector")}
            >
              <img className="me-2" src={IconEnergy} alt="" />
              Energy Sector
            </AppButton>
            <AppButton
              className={`md ${
                industry === "Commercial" ? "primary" : "secondary"
              }`}
              onClick={() => setIndustry("Commercial")}
            >
              <img className="me-2" src={IconCommercial} alt="" />
              Commercial
            </AppButton>
          </div>
          <div className="content">
            {(industry === "Defense" && (
              <>
                <div className="row align-items-center">
                  <div className="col-xl-6 pe-xl-5 mb-4 mb-md-5 mb-xl-0">
                    <h3>Department of Defense</h3>
                    <p className="m-0">
                      'PRATUS' exercise workspace is a web-based platform used
                      to plan, manage, and assess military exercises in a
                      centralized and collaborative workspace environment.
                      Exercise staff members can plan and manage exercise
                      scenario-based events with MSEL injects aligned to
                      participant objectives for assessment and/or
                      self-assessment, and view qualitative and quantitative
                      analytics in real-time. It serves as the ultimate tool kit
                      for exercise control cells to validate plans, increase
                      readiness, analyze trends, and fully understand the value
                      of exercises by presenting DoD leaders at each level
                      useful data needed to make informed decisions.
                    </p>
                  </div>
                  <div className="col-xl-6 ps-xl-5">
                    <img
                      className="w-100 d-block rounded overflow-hidden"
                      src={GraphicsDefense}
                      alt=""
                    />
                  </div>
                </div>
              </>
            )) ||
              null}
            {(industry === "Energy Sector" && (
              <>
                <div className="row align-items-center">
                  <div className="col-xl-6 pe-xl-5 mb-4 mb-md-5 mb-xl-0">
                    <h3>Energy Sector</h3>
                    <p className="m-0">
                      'PRATUS' gives the oil and gas industry one platform that
                      solves crisis management and business continuity in one
                      click. Whether in a web browser or incorporated into
                      Microsoft Teams, train your people, run exercises out the
                      box, and respond to crisis on any device - anywhere. We
                      build custom software solutions for the energy sector,
                      using AI and high performance computing, delivering the
                      most cutting-edge solutions on the market. From oil spill
                      response to cyber attacks, our platform gets your team
                      ready and able to save lives, money, and time.
                    </p>
                  </div>
                  <div className="col-xl-6 ps-xl-5">
                    <img
                      className="w-100 d-block rounded overflow-hidden"
                      src={GraphicsEnergySector}
                      alt=""
                    />
                  </div>
                </div>
              </>
            )) ||
              null}
            {(industry === "Commercial" && (
              <>
                <div className="row align-items-center">
                  <div className="col-xl-6 pe-xl-5 mb-4 mb-md-5 mb-xl-0">
                    <h3>Coming Soon!</h3>
                  </div>
                  <div className="col-xl-6 ps-xl-5"></div>
                </div>
              </>
            )) ||
              null}
          </div>
        </Section>
        <Section sectionClass="section__service-connect pt-0">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6 text-center">
              <h2>Connect With Our Team</h2>
              <p className="mb-4 mb-md-5">
                Like what you have seen? Let’s get started. Just fill in a few
                details and we will get in touch as soon as possible.
              </p>
              <AppButton
                className={"primary shadow"}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </AppButton>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
