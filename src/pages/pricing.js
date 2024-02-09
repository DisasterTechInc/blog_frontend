import React, { useState } from "react";
import { Layout } from "components/Layout";
import { Section } from "components/Section";
import { Breadcrumb } from "components/Breadcrumb";
import { AppSwitcher } from "../components/AppSwitcher";
import { AppButton } from "../components/AppButton";
import { pricingInfo } from "../assets/data/Pricing";
import Accordion from "react-bootstrap/Accordion";
import { faqs } from "../assets/data/FAQs";
import SampleLogo01 from "assets/images/sample__logo--01.svg";
import SampleLogo02 from "assets/images/sample__logo--02.svg";
import SampleLogo03 from "assets/images/sample__logo--03.svg";
import SampleLogo04 from "assets/images/sample__logo--04.svg";
import SampleLogo05 from "assets/images/sample__logo--05.svg";
import SampleLogo06 from "assets/images/sample__logo--06.svg";
import { AppInput } from "../components/AppInput";
import { navigate } from "gatsby";
import { useForm, Controller } from "react-hook-form";

export default function Pricing() {
  const {
    handleSubmit,
    control,
    getFieldState,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [pricingYearly, setPricingYearly] = useState(false);

  const onSubmit = async (data) => {
    console.log("form data", data);
  };
  return (
    <Layout name="pricing">
      <Breadcrumb>
        <li className="active">Pricing</li>
      </Breadcrumb>
      <main className="site-main">
        <Section sectionClass="py-0">
          <h1 className="text-md-center mb-4">Transparent Pricing for You</h1>
          <div className="d-flex align-items-center justify-content-center mb-4 pb-md-3">
            <p className="m-0 weight-600">Bill Monthly</p>
            <AppSwitcher
              className={"mx-3"}
              checked={pricingYearly}
              onChange={() => setPricingYearly(!pricingYearly)}
            />
            <p className="m-0 weight-600">Bill Yearly</p>
          </div>
          <div className="section__pricing">
            <div>
              <h3 className="mb-2">Standard</h3>
              <p className="text-l mb-4 pb-3">Best for growing teams</p>
              <span>{pricingYearly ? `$${350 * 12}` : `$350`}</span>
              <p className="mb-5">per {pricingYearly ? "year" : "month"}</p>
              <AppButton className={"primary reverse"}>
                Get started now
              </AppButton>
            </div>
            <div>
              <h3 className="mb-2">Professional</h3>
              <p className="text-l mb-4 pb-3">Best for small teams</p>
              <span>{pricingYearly ? `$${450 * 12}` : `$450`}</span>
              <p className="mb-5">per {pricingYearly ? "year" : "month"}</p>
              <AppButton className={"white"}>Get started now</AppButton>
            </div>
            <div>
              <h3 className="mb-2">Enterprise</h3>
              <p className="text-l mb-4 pb-3">Best for large teams</p>
              <span>{pricingYearly ? `$${550 * 12}` : `$550`}</span>
              <p className="mb-5">per {pricingYearly ? "year" : "month"}</p>
              <AppButton className={"primary reverse"}>
                Get started now
              </AppButton>
            </div>
          </div>
        </Section>
        <Section sectionClass="section__plan-info lrg">
          <div className="desktop d-none d-xl-block">
            <table>
              <thead>
                <tr>
                  <th>
                    <h1>Plan Comparison</h1>
                    <p className="text-l weight-400">
                      Choose the option that makes the most sense for your
                      business.
                    </p>
                  </th>
                  {(pricingInfo &&
                    !!pricingInfo?.types?.length &&
                    pricingInfo?.types?.map((i, idx) => (
                      <th key={idx}>
                        <h5 className="mb-3 text-capitalize">{i}</h5>
                        {i === "free" ? (
                          <AppButton className={"primary reverse md"}>
                            14 day free trial
                          </AppButton>
                        ) : i === "enterprise" ? (
                          <AppButton className={"primary reverse md"}>
                            Contact sales
                          </AppButton>
                        ) : (
                          <AppButton className={"primary reverse md"}>
                            Get started
                          </AppButton>
                        )}
                      </th>
                    ))) ||
                    null}
                </tr>
                <tr className="gap">
                  <td colSpan={"5"}></td>
                </tr>
              </thead>
              {(pricingInfo &&
                !!pricingInfo?.types?.length &&
                !!pricingInfo?.data?.length && (
                  <tbody>
                    {/* Highlight Cell Top Edge */}
                    <tr className="edge top">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    {/* Highlight Cell Top Edge */}
                    {pricingInfo?.data?.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item?.title}</td>
                        {item?.info?.map((info) => (
                          <td
                            key={info?.category}
                            className={
                              (info?.category === "professional" &&
                                "highlight") ||
                              ""
                            }
                          >
                            {info?.value ? (
                              <>
                                {info?.label || (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M10 15.586L6.707 12.293L5.293 13.707L10 18.414L19.707 8.707L18.293 7.293L10 15.586Z"
                                      fill="#6366F1"
                                    />
                                  </svg>
                                )}
                              </>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M16.192 6.344L11.949 10.586L7.707 6.344L6.293 7.758L10.535 12L6.293 16.242L7.707 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.758L16.192 6.344Z"
                                  fill="white"
                                  fillOpacity="0.5"
                                />
                              </svg>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                    {/* Highlight Cell Bot Edge */}
                    <tr className="edge bot">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    {/* Highlight Cell Bot Edge */}
                  </tbody>
                )) || (
                <tbody>
                  <tr>
                    <td colSpan={"5"} className="text-center">
                      No data found
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
          <div className="mobile d-block d-xl-none">
            <h1 className="mb-3 text-center">Plan Comparison</h1>
            <p className="text-l weight-400 text-center mb-4 mb-md-5 pb-2 pb-md-0">
              Choose the option that makes the most sense for your business.
            </p>
            {(pricingInfo && !!pricingInfo?.types?.length && (
              <Accordion flush>
                {pricingInfo?.types?.map((i, idx) => (
                  <Accordion.Item eventKey={idx} key={idx}>
                    <Accordion.Header>
                      <div className="d-block d-md-flex align-items-center flex-grow-1">
                        <span className="d-block mb-2 mb-md-0">
                          {i.charAt(0).toUpperCase()}
                          {i.slice(1)}
                        </span>
                        {i === "free" ? (
                          <AppButton className={"primary reverse sm ms-auto"}>
                            14 day free trial
                          </AppButton>
                        ) : i === "enterprise" ? (
                          <AppButton className={"primary reverse sm ms-auto"}>
                            Contact sales
                          </AppButton>
                        ) : (
                          <AppButton className={"primary reverse sm ms-auto"}>
                            Get started
                          </AppButton>
                        )}
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="px-0 pb-0">
                      <table>
                        <tbody>
                          {(pricingInfo && !!pricingInfo?.data?.length && (
                            <>
                              {pricingInfo?.data?.map((item, idx) => (
                                <tr key={idx}>
                                  <td>{item?.title}</td>
                                  {item?.info
                                    ?.filter((data) => data?.category === i)
                                    .map((infoData, idx) => (
                                      <td key={idx}>
                                        {infoData?.value ? (
                                          <>
                                            {infoData?.label || (
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                              >
                                                <path
                                                  d="M10 15.586L6.707 12.293L5.293 13.707L10 18.414L19.707 8.707L18.293 7.293L10 15.586Z"
                                                  fill="#6366F1"
                                                />
                                              </svg>
                                            )}
                                          </>
                                        ) : (
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <path
                                              d="M16.192 6.344L11.949 10.586L7.707 6.344L6.293 7.758L10.535 12L6.293 16.242L7.707 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.758L16.192 6.344Z"
                                              fill="white"
                                              fillOpacity="0.5"
                                            />
                                          </svg>
                                        )}
                                      </td>
                                    ))}
                                </tr>
                              ))}
                            </>
                          )) || (
                            <tr>
                              <td className="text-center">No data found</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            )) ||
              null}
          </div>
        </Section>
        <Section sectionClass="bg-white--04 lrg">
          <div className="row align-items-start">
            <div className="col-lg-4 mb-4 mb-md-5 mb-lg-0">
              <h2 className="mb-3 mb-md-4">
                Any questions? <br />
                Check out the FAQs
              </h2>
              <p className="text-l mb-4 pb-2">
                Still have unanswered questions and need to get in touch?
              </p>
              <div className="button-group">
                <AppButton
                  className={"primary md"}
                  onClick={() => navigate("/contact")}
                >
                  Contact support
                </AppButton>
                <AppButton className={"secondary md"}>FAQs</AppButton>
              </div>
            </div>
            <div className="col-lg-7 ms-auto">
              {(faqs && !!faqs?.length && (
                <Accordion flush>
                  {faqs.map((faq, idx) => (
                    <Accordion.Item eventKey={idx} key={idx}>
                      <Accordion.Header>{faq?.question}</Accordion.Header>
                      <Accordion.Body>
                        <div
                          dangerouslySetInnerHTML={{ __html: faq?.answer }}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              )) ||
                null}
            </div>
          </div>
        </Section>
        <Section sectionClass="lrg pb-0">
          <h2 className="text-center mb-4 pb-3">
            Over 5K Customers Worldwide Rely on Us
          </h2>
          <div className="logos row">
            <div className="col-4 col-xl-2 mb-3 mb-xl-0">
              <span>
                <img src={SampleLogo01} alt="" />
              </span>
            </div>
            <div className="col-4 col-xl-2 mb-3 mb-xl-0">
              <span>
                <img src={SampleLogo02} alt="" />
              </span>
            </div>
            <div className="col-4 col-xl-2 mb-3 mb-xl-0">
              <span>
                <img src={SampleLogo03} alt="" />
              </span>
            </div>
            <div className="col-4 col-xl-2">
              <span>
                <img src={SampleLogo04} alt="" />
              </span>
            </div>
            <div className="col-4 col-xl-2">
              <span>
                <img src={SampleLogo05} alt="" />
              </span>
            </div>
            <div className="col-4 col-xl-2">
              <span>
                <img src={SampleLogo06} alt="" />
              </span>
            </div>
          </div>
        </Section>
        <Section sectionClass={"section__get-started"}>
          <div className="inner text-center">
            <h1>Ready to Get Started?</h1>
            <p className="text-l mb-4 pb-3">
              Organize your tasks with a 14-day free trial
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-md-flex align-items-start">
                    <div className="flex-grow-1 mb-4 mb-md-0">
                      <Controller
                        control={control}
                        name="email"
                        rules={{
                          required: true,
                          pattern:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <AppInput
                            className={`md ${
                              errors?.email?.type === "required" ||
                              errors?.email?.type === "pattern"
                                ? "error"
                                : !!watch("email") &&
                                  !errors?.email &&
                                  !getFieldState("email")?.invalid
                                ? "success"
                                : ""
                            }`}
                            type="text"
                            onChange={onChange}
                            value={value}
                            placeholder={"Your Email"}
                          />
                        )}
                      />
                      {errors?.email?.type === "required" && (
                        <div className="text-center text-md-start">
                          <span className="form-status error">
                            This field is required
                          </span>
                        </div>
                      )}
                      {errors?.email?.type === "pattern" && (
                        <div className="text-center text-md-start">
                          <span className="form-status error">
                            Please provide a valid email
                          </span>
                        </div>
                      )}
                      {!!watch("email") &&
                        !errors?.email &&
                        !getFieldState("email")?.invalid && (
                          <div className="text-center text-md-start">
                            <span className="form-status success">
                              Looks good!
                            </span>
                          </div>
                        )}
                    </div>
                    <AppButton type="submit" className="md primary">
                      Get started for free
                    </AppButton>
                  </div>
                </form>
              </div>
            </div>
            <p className="text-s m-0 mt-3">
              No subscriptions. No annual fees. No lock-ins.
            </p>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
