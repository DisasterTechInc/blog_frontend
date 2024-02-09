import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { navigate } from "gatsby";
import { Layout } from "components/Layout";
import { Section } from "components/Section";
import { Breadcrumb } from "components/Breadcrumb";
import { OurTeam } from "assets/data/OurTeam";
import { Testimonials } from "../assets/data/Testimonials";
import { MemberDetailsDialog } from "../modals/MemberDetailsDialog";
import GraphicsBannerSliceLrg from "assets/images/graphics__about__bannerSlice--lrg.jpg";
import GraphicsBannerSliceSmlA from "assets/images/graphics__about__bannerSlice--sml--1.jpg";
import GraphicsBannerSliceSmlB from "assets/images/graphics__about__bannerSlice--sml--2.jpg";
import GraphicsMap from "assets/images/map__staff.svg";
import ArrowRight from "assets/images/icon__arrow--right.svg";
import ArrowRightDark from "assets/images/icon__arrow--right--dark.svg";
import IconAngleLeft from "assets/images/icon__angle--left.svg";
import IconAngleRight from "assets/images/icon__angle--right.svg";
import LogoClutch from "assets/images/logo__clutch.svg";
import GraphicsPeople from "assets/images/graphics__people.png";
import IconCustomerSupport from "assets/images/icon__customer-support.svg";
import IconCombinedExperience from "assets/images/icon__combined-experience.svg";
import SampleLogo01 from "assets/images/sample__logo--01.svg";
import SampleLogo02 from "assets/images/sample__logo--02.svg";
import SampleLogo03 from "assets/images/sample__logo--03.svg";
import SampleLogo04 from "assets/images/sample__logo--04.svg";
import SampleLogo05 from "assets/images/sample__logo--05.svg";
import SampleLogo06 from "assets/images/sample__logo--06.svg";
import { AppButton } from "../components/AppButton";
import IconMission from "assets/images/icon__mission.svg";
import IconVision from "assets/images/icon__vision.svg";
import IconValues from "assets/images/icon__values.svg";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function About() {
  const [teamCategory, setTeamCategory] = useState("Team Member");
  const [teams, setTeams] = useState();
  const [showMemberBioDialog, setShowMemberBioDialog] = useState(false);
  const [dataMemberBioDialog, setDataMemberBioDialog] = useState(null);

  const sliderRef = useRef();

  useEffect(() => {
    filterTeamMembers();
  }, [teamCategory]);

  const filterTeamMembers = () => {
    const data = OurTeam.filter(
      (member) => member?.active && member.role.includes(teamCategory)
    );
    setTeams(data);
  };

  return (
    <Layout name="about">
      <Breadcrumb>
        <li className="active">About</li>
      </Breadcrumb>
      <Section>
        <h4 className="lrg m-0">We are the Disaster Tech Team</h4>
      </Section>
      <main className="site-main">
        <Section sectionClass={"section__banner"}>
          <div className="row">
            <div className="col-6">
              <img
                src={GraphicsBannerSliceLrg}
                alt=""
                className="w-100 d-block"
              />
            </div>
            <div className="col-3">
              <img
                src={GraphicsBannerSliceSmlA}
                alt=""
                className="w-100 d-block"
              />
            </div>
            <div className="col-3">
              <img
                src={GraphicsBannerSliceSmlB}
                alt=""
                className="w-100 d-block"
              />
            </div>
          </div>
        </Section>
        <Section sectionClass={"section__mission-vision-value"}>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 col-xl-6 text-center">
              <h1>Our Mission, Vision & Values</h1>
              <p className="text-l mb-4">
                Disaster Tech takes great pride in our mission, vision and
                values. We use these to shape our company for the present and
                future as we continue to grow within our current and new
                industries.
              </p>
            </div>
          </div>
          <div className="row pt-md-5">
            <div className="col-lg-4">
              <div className="block">
                <span className="icon">
                  <img src={IconMission} alt="" />
                </span>
                <h2 className="mb-3 mb-md-4">Mission</h2>
                <p className="m-0">
                  We provide practitioner-driven, crisis management software
                  that supports crisis managers within the DoD and Utilities
                  verticals to make smarter decisions in preparedness and
                  response to ultimately saves lives and protect the
                  environment.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-5 pt-4 pt-lg-5">
              <div className="block">
                <span className="icon">
                  <img src={IconVision} alt="" />
                </span>
                <h2 className="mb-3 mb-md-4">Vision</h2>
                <p className="m-0">
                  Be the trusted leader in providing decision support
                  technologies for situational awareness, operational
                  coordination, and planning before, during, and after a crisis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0 pt-4 pt-lg-0">
              <div className="block">
                <span className="icon">
                  <img src={IconValues} alt="" />
                </span>
                <h2 className="mb-3 mb-md-4">Values</h2>
                <ul className="m-0">
                  <li>People first & mission oriented culture</li>
                  <li>Practitioner Driven Innovation</li>
                  <li>Insightful Analytics for Proactive Response</li>
                  <li>Seamless Multi-Agency Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section sectionClass={"section__staff-map"}>
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 col-xl-6">
              <h1>Our offices around the country</h1>
              <p className="text-l mb-4">
                Our incredible team of remote employees reside all around the
                country, bringing unique experience, background, and knowledge
                to our company.
              </p>
              <AppButton
                className="primary md"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </AppButton>
            </div>
          </div>
          <img src={GraphicsMap} alt="" className="w-100 d-block" />
        </Section>
        <Section sectionClass={"section__our-team"}>
          <div className="d-xl-flex align-items-center mb-md-4">
            <h1 className="text-center text-xl-start mb-xl-0">
              Our Talented Team{" "}
            </h1>
            <div className="button-group d-flex justify-content-center ms-auto">
              <AppButton
                className={`md ${
                  teamCategory === "Team Member" ? "primary" : "secondary"
                }`}
                onClick={() => setTeamCategory("Team Member")}
              >
                Team Members
              </AppButton>
              <AppButton
                className={`md ms-3 mt-0 ${
                  teamCategory === "Senior Advisors" ? "primary" : "secondary"
                }`}
                onClick={() => setTeamCategory("Senior Advisors")}
              >
                Senior Advisors
              </AppButton>
              <AppButton
                className={`md ms-3 mt-0 ${
                  teamCategory === "Board Member" ? "primary" : "secondary"
                }`}
                onClick={() => setTeamCategory("Board Member")}
              >
                Board Members
              </AppButton>
            </div>
          </div>
          {teams && !!teams?.length ? (
            <div className="row justify-content-center">
              {teams.map((member) => (
                <div
                  className="member col-6 col-md-3 text-center mt-4 pb-mb-3"
                  key={member?.id}
                >
                  <div className="avatar">
                    <img
                      src={member?.avatar}
                      alt={member?.name}
                      title={member?.name}
                    />
                    <AppButton
                      className="sm"
                      onClick={() => {
                        setDataMemberBioDialog(member);
                        setShowMemberBioDialog(true);
                      }}
                    >
                      Bio{" "}
                      <img
                        src={ArrowRightDark}
                        className="ms-2 animate__arrow--right"
                        alt=""
                      />
                    </AppButton>
                  </div>
                  <p className="text-l weight-700 m-0 color-white mb-1">
                    {member?.name}
                  </p>
                  <p className="text-s weight-600 m-0">{member?.designation}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="button-group d-flex justify-content-center mt-4 mt-md-5">
            <AppButton
              className="primary md w-auto"
              onClick={() => navigate("/contact")}
            >
              Join Our Team{" "}
              <img
                src={ArrowRight}
                className="ms-2 animate__arrow--right"
                alt=""
              />
            </AppButton>
          </div>
        </Section>
        <Section sectionClass={"section__stats lrg"}>
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0 pb-3 pb-lg-0">
              <h1 className="mb-4 pb-md-2">
                Software built by a team of practitioners and innovators
              </h1>
              <p className="weight-700 mb-4 pb-md-4">
                With PRATUS, you can respond to any crisis with confidence and
                agility to achieve better outcomes for your organization and the
                communities you serve.
              </p>
              <AppButton
                className="primary"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </AppButton>
            </div>
            <div className="col-lg-6 ms-auto">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="block pb-4">
                    <img src={LogoClutch} alt="" />
                    <h1 className="mt-4 pt-2 mb-0">100%</h1>
                    <p className="text-l weight-700">Positive Feedback</p>
                    <div className="d-flex justify-content-center mb-2">
                      <div className="rating outer">
                        <span
                          className="rating inner"
                          style={{
                            width: "100%",
                          }}
                        ></span>
                      </div>
                    </div>
                    <img src={GraphicsPeople} alt="" style={{ width: "90%" }} />
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="block">
                    <img src={IconCustomerSupport} alt="" />
                    <h1 className="mt-4 mb-0">24/7</h1>
                    <p className="text-l weight-700 m-0">Customer support</p>
                  </div>
                  <div className="block mt-4">
                    <img src={IconCombinedExperience} alt="" />
                    <h1 className="mt-4 mb-0">120+</h1>
                    <p className="text-l weight-700 m-0">Combined Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logos row">
            <div className="col-4 col-xl-2 mb-3 mb-md-5 mb-xl-0">
              <img src={SampleLogo01} alt="" />
            </div>
            <div className="col-4 col-xl-2 mb-3 mb-md-5 mb-xl-0">
              <img src={SampleLogo02} alt="" />
            </div>
            <div className="col-4 col-xl-2 mb-3 mb-md-5 mb-xl-0">
              <img src={SampleLogo03} alt="" />
            </div>
            <div className="col-4 col-xl-2">
              <img src={SampleLogo04} alt="" />
            </div>
            <div className="col-4 col-xl-2">
              <img src={SampleLogo05} alt="" />
            </div>
            <div className="col-4 col-xl-2">
              <img src={SampleLogo06} alt="" />
            </div>
          </div>
        </Section>
        <Section sectionClass={"section__testimonials lrg"}>
          <div className="row">
            <div className="col-md-3">
              <h2 className="m-0">
                What Our <br />
                Clients Say <br />
                About Us:
              </h2>
              {(Testimonials && Testimonials.length > 3 && (
                <div className="control">
                  <AppButton
                    custom
                    className="prev"
                    onClick={() => sliderRef.current.slickPrev()}
                  >
                    <img src={IconAngleLeft} alt="" />
                  </AppButton>
                  <AppButton
                    custom
                    className="next"
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <img src={IconAngleRight} alt="" />
                  </AppButton>
                </div>
              )) ||
                null}
            </div>
            <div className="col-md-9 mt-4 mt-md-0">
              <Slider {...settings} ref={sliderRef}>
                {(Testimonials &&
                  !!Testimonials.length &&
                  Testimonials.map((item) => (
                    <div className="block" key={item?.id}>
                      <div className="content">
                        <p className="m-0">{item?.content}</p>
                        <div className="rating outer">
                          <span
                            className="rating inner"
                            style={{
                              width: `${
                                (Number(item?.rating) / 5) * 100 || 2
                              }%`,
                            }}
                          ></span>
                        </div>
                      </div>
                      <div className="author">
                        <img src={item?.avatar} alt="" />
                        <div className="ms-3 weight-700">
                          <span className="text-s d-block color-white">
                            {item?.author}
                          </span>
                          <span className="text-xs d-block">
                            {item?.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))) ||
                  null}
              </Slider>
            </div>
          </div>
        </Section>
        <Section sectionClass={"section__work-with-us pt-0"}>
          <div className="inner text-center">
            <span className="d-block text-xxl weight-700 mb-3">
              Ready to get started?
            </span>
            <h1 className="mb-md-5">
              Launch Your Incident Command <br />
              Center with Us
            </h1>
            <AppButton className="primary" onClick={() => navigate("/contact")}>
              Work with us
            </AppButton>
          </div>
        </Section>
      </main>
      {showMemberBioDialog && (
        <MemberDetailsDialog
          show={showMemberBioDialog}
          onClose={() => {
            setShowMemberBioDialog(false);
            setDataMemberBioDialog(null);
          }}
          data={dataMemberBioDialog}
        />
      )}
    </Layout>
  );
}
