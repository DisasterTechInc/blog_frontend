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
import SampleLogo01 from "assets/images/sample__logo--01.svg";
import SampleLogo02 from "assets/images/sample__logo--02.svg";
import SampleLogo03 from "assets/images/sample__logo--03.svg";
import SampleLogo04 from "assets/images/sample__logo--04.svg";
import SampleLogo05 from "assets/images/sample__logo--05.svg";
import SampleLogo06 from "assets/images/sample__logo--06.svg";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
    const data = OurTeam.filter((member) => member.role.includes(teamCategory));
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
            <div className="col-md-6">
              <img
                src={GraphicsBannerSliceLrg}
                alt=""
                className="rounded w-100 d-block"
              />
            </div>
            <div className="col-md-3">
              <img
                src={GraphicsBannerSliceSmlA}
                alt=""
                className="rounded w-100 d-block"
              />
            </div>
            <div className="col-md-3">
              <img
                src={GraphicsBannerSliceSmlB}
                alt=""
                className="rounded w-100 d-block"
              />
            </div>
          </div>
        </Section>
        <Section sectionClass={"section__staff-map"}>
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <h1>Our offices around the country</h1>
              <p className="text-l mb-4">
                Congue gravida vel imperdiet rutrum lectus felis purus blandit
                ullamcorper. In eleifend in ultrices ultrices aliquam augue
                praesent.
              </p>
              <div className="button-group justify-content-center mb-4">
                <button
                  className="button primary md"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <img src={GraphicsMap} alt="" className="w-100 d-block" />
        </Section>
        <Section sectionClass={"section__our-team"}>
          <div className="d-flex align-items-center mb-4">
            <h1 className="m-0">Our Talented Team </h1>
            <div className="button-group ms-auto">
              <button
                className={`button md ${
                  teamCategory === "Team Member" ? "primary" : "secondary"
                }`}
                onClick={() => setTeamCategory("Team Member")}
              >
                Team Members
              </button>
              <button
                className={`button md ${
                  teamCategory === "Senior Advisors" ? "primary" : "secondary"
                }`}
                onClick={() => setTeamCategory("Senior Advisors")}
              >
                Senior Advisors
              </button>
              <button
                className={`button md ${
                  teamCategory === "Board Member" ? "primary" : "secondary"
                }`}
                onClick={() => setTeamCategory("Board Member")}
              >
                Board Members
              </button>
            </div>
          </div>
          {teams && !!teams?.length ? (
            <div className="row justify-content-center">
              {teams.map((member) => (
                <>
                  <div
                    className="member col-md-3 text-center mt-4 pb-3"
                    key={member?.id}
                  >
                    <div className="avatar">
                      <img
                        src={member?.avatar}
                        alt={member?.name}
                        title={member?.name}
                      />
                      <button
                        className="button sm"
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
                      </button>
                    </div>
                    <p className="text-l weight-700 m-0 color-white mb-1">
                      {member?.name}
                    </p>
                    <p className="text-s weight-600 m-0">
                      {member?.designation}
                    </p>
                  </div>
                </>
              ))}
            </div>
          ) : null}
          <div className="button-group justify-content-center mt-5">
            <button
              className="button primary md"
              onClick={() => navigate("/contact")}
            >
              Join Our Team{" "}
              <img
                src={ArrowRight}
                className="ms-2 animate__arrow--right"
                alt=""
              />
            </button>
          </div>
        </Section>
        <Section sectionClass={"section__stats lrg"}>
          <div className="row align-items-center">
            <div className="col-md-5">
              <h1 className="mb-4 pb-2">
                Software built by a team of practitioners and innovators
              </h1>
              <p className="weight-700 mb-4 pb-4">
                With PRATUS, you can respond to any crisis with confidence and
                agility to achieve better outcomes for your organization and the
                communities you serve.
              </p>
              <button
                className="button primary"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
            <div className="col-md-6 ms-auto">
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
                <div className="col-md-6">
                  <div className="block">
                    <img src={IconCustomerSupport} alt="" />
                    <h1 className="mt-4 mb-0">24/7</h1>
                    <p className="text-l weight-700 m-0">Customer support</p>
                  </div>
                  <div className="block mt-4">
                    <img src={IconCustomerSupport} alt="" />
                    <h1 className="mt-4 mb-0">+30</h1>
                    <p className="text-l weight-700 m-0">Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logos row">
            <div className="col-md-2">
              <img src={SampleLogo01} alt="" />
            </div>
            <div className="col-md-2">
              <img src={SampleLogo02} alt="" />
            </div>
            <div className="col-md-2">
              <img src={SampleLogo03} alt="" />
            </div>
            <div className="col-md-2">
              <img src={SampleLogo04} alt="" />
            </div>
            <div className="col-md-2">
              <img src={SampleLogo05} alt="" />
            </div>
            <div className="col-md-2">
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
                  <button
                    className="button custom prev"
                    onClick={() => sliderRef.current.slickPrev()}
                  >
                    <img src={IconAngleLeft} alt="" />
                  </button>
                  <button
                    className="button custom next"
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <img src={IconAngleRight} alt="" />
                  </button>
                </div>
              )) ||
                null}
            </div>
            <div className="col-md-9">
              <Slider {...settings} ref={sliderRef}>
                {(Testimonials &&
                  !!Testimonials.length &&
                  Testimonials.map((item) => (
                    <>
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
                    </>
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
            <h1 className="mb-5">
              Launch Your Incident Command <br />
              Center with Us
            </h1>
            <button
              className="button primary"
              onClick={() => navigate("/contact")}
            >
              Work with us
            </button>
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
