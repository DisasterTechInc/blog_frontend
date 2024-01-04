import * as React from "react";
import { Layout } from "../components/Layout";
import Banner from "../components/Banner";
import Logo from "../assets/images/logo.svg";
import GraphicsIntro from "../assets/images/graphics__home-page__section-intro.png";
import GraphicsCrypto from "../assets/images/graphics__home-page__section-crypto.png";
import GraphicsVideo from "../assets/images/graphics__home-page__section-video.png";
import { Section } from "../components/Section";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export default function Home() {
  const { title } = useSiteMetadata();
  return (
    <>
      <Layout>
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
            <button className="button primary md">Know More</button>
          </Section>
          <Section sectionClass={"pt-0"}>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="w-100 d-block" src={GraphicsCrypto} alt="" />
              </div>
              <div className="col-md-6 col-xl-5 ms-auto">
                <h1>Make Your Life a lot Easier with Crypto Bank</h1>
                <p className="m-0">
                  Sociis sit risus id. Sit facilisis dolor fermentum vestibulum
                  arcuulvi maecenas maecenas pharet tincidunt sollicitudin in
                  pellentesque vitae.
                </p>
              </div>
            </div>
          </Section>
          <Section sectionClass={"text-center pt-0"}>
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 col-lg-8 col-xl-5">
                <h1>How Does It Work?</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  volutpat mollis egestas nam luctus facilisis ultrices
                </p>
                <div className="button-group justify-content-center">
                  <button className="button primary">Schedule a Demo</button>
                  <button className="button secondary">Learn More</button>
                </div>
              </div>
            </div>
            <img src={GraphicsVideo} className="w-100 d-block" alt="" />
          </Section>
          <Section sectionClass={"section__start-trial py-0"}>
            <div className="inner">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <h1>Let's start your investing easier now!</h1>
                  <button className="button primary">Start trial now</button>
                </div>
                <div className="col-md-6 ms-auto mt-4 mt-md-0">
                  <ul className="list checked">
                    <li>Purus vestibulum pharetra amet tincidunt pretium</li>
                    <li>Haretra justo magna pharetra dui gravida sed nec</li>
                    <li>Venenatis risus faucibus volutpat amet feugiat a</li>
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
