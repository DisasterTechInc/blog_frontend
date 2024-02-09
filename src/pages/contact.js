import React from "react";
import { Layout } from "components/Layout";
import { Section } from "components/Section";
import { Breadcrumb } from "components/Breadcrumb";
import IconMail from "assets/images/icon__email.svg";
import IconCareer from "assets/images/icon__careers.svg";
import { AppInput } from "../components/AppInput";
import { AppCheckbox } from "../components/AppCheckbox";
import { AppButton } from "../components/AppButton";
import IconLocation from "assets/images/icon__location.svg";
import IconCall from "assets/images/icon__call.svg";
import { Socials } from "../components/Socials";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

export default function Contact() {
  const {
    handleSubmit,
    control,
    getFieldState,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    console.log("form data", data);

    let filteredData = JSON.stringify({
      properties: {
        email: data?.email,
        firstname: data?.firstname,
        lastname: data?.lastname,
        phone: data?.phone,
        company: data?.company,
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.GATSBY_HUBSPOT_API_KEY,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GATSBY_HUBSPOT_ACCESS_TOKEN}`,
      },
      data: filteredData,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout name="contact">
      <Breadcrumb>
        <li className="active">Contact</li>
      </Breadcrumb>
      <main className="site-main">
        <Section sectionClass="section__contact lrg pt-0">
          <div className="row">
            <div className="col-xl-6">
              <h1>Contact Us</h1>
              <div className="info">
                <span className="icon">
                  <img src={IconMail} alt="" />
                </span>
                <div className="ms-4">
                  <h4 className="mb-2">Email us</h4>
                  <p>
                    Please feel free to drop us a line. We will <br />
                    respond as soon as possible.
                  </p>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <a className="link" href="mailto:info@disastertech.com">
                      Info
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.41083 15.1248L10.5892 16.3031L16.1783 10.7139L10.5892 5.12476L9.41083 6.30309L12.9883 9.88059H5V11.5473H12.9883L9.41083 15.1248Z" />
                      </svg>
                    </a>
                    <a className="link" href="mailto:support@disastertech.com">
                      Support
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.41083 15.1248L10.5892 16.3031L16.1783 10.7139L10.5892 5.12476L9.41083 6.30309L12.9883 9.88059H5V11.5473H12.9883L9.41083 15.1248Z" />
                      </svg>
                    </a>
                    <a
                      className="link"
                      href="mailto:customerservice@disastertech.com"
                    >
                      Customer Service
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.41083 15.1248L10.5892 16.3031L16.1783 10.7139L10.5892 5.12476L9.41083 6.30309L12.9883 9.88059H5V11.5473H12.9883L9.41083 15.1248Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="info">
                <span className="icon">
                  <img src={IconCareer} alt="" />
                </span>
                <div className="ms-4">
                  <h4 className="mb-2">Careers</h4>
                  <p>
                    Send us your application, and if we have a <br />
                    position available that meets your <br />
                    experience, we will reach out.
                  </p>
                  <div className="d-flex align-items-center">
                    <a className="link" href="mailto:careers@disastertech.com">
                      Send an application
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.41083 15.1248L10.5892 16.3031L16.1783 10.7139L10.5892 5.12476L9.41083 6.30309L12.9883 9.88059H5V11.5473H12.9883L9.41083 15.1248Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 position-relative">
              <div className="form">
                <h2>Connect with Us</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <label htmlFor="" className="form-label">
                        Email
                      </label>
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
                            className={
                              errors?.email?.type === "required" ||
                              errors?.email?.type === "pattern"
                                ? "error"
                                : !!watch("email") &&
                                  !errors?.email &&
                                  !getFieldState("email")?.invalid
                                ? "success"
                                : ""
                            }
                            type="text"
                            onChange={onChange}
                            value={value}
                          />
                        )}
                      />
                      {errors?.email?.type === "required" && (
                        <span className="form-status error">
                          This field is required
                        </span>
                      )}
                      {errors?.email?.type === "pattern" && (
                        <span className="form-status error">
                          Please provide a valid email
                        </span>
                      )}
                      {!!watch("email") &&
                        !errors?.email &&
                        !getFieldState("email")?.invalid && (
                          <span className="form-status success">
                            Looks good!
                          </span>
                        )}
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        First Name
                      </label>
                      <Controller
                        control={control}
                        name="firstname"
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <AppInput
                            className={
                              errors?.firstname?.type === "required"
                                ? "error"
                                : !!watch("firstname") &&
                                  !errors?.firstname &&
                                  !getFieldState("firstname")?.invalid
                                ? "success"
                                : ""
                            }
                            type="text"
                            onChange={onChange}
                            value={value}
                          />
                        )}
                      />
                      {errors?.firstname?.type === "required" && (
                        <span className="form-status error">
                          This field is required
                        </span>
                      )}
                      {!!watch("firstname") &&
                        !errors?.firstname &&
                        !getFieldState("firstname")?.invalid && (
                          <span className="form-status success">
                            Looks good!
                          </span>
                        )}
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Last Name
                      </label>
                      <Controller
                        control={control}
                        name="lastname"
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <AppInput
                            className={
                              errors?.lastname?.type === "required"
                                ? "error"
                                : !!watch("lastname") &&
                                  !errors?.lastname &&
                                  !getFieldState("lastname")?.invalid
                                ? "success"
                                : ""
                            }
                            type="text"
                            onChange={onChange}
                            value={value}
                          />
                        )}
                      />
                      {errors?.lastname?.type === "required" && (
                        <span className="form-status error">
                          This field is required
                        </span>
                      )}
                      {!!watch("lastname") &&
                        !errors?.lastname &&
                        !getFieldState("lastname")?.invalid && (
                          <span className="form-status success">
                            Looks good!
                          </span>
                        )}
                    </div>
                    <div className="col-md-12 mb-4">
                      <label htmlFor="" className="form-label">
                        Company Name
                      </label>
                      <Controller
                        control={control}
                        name="company"
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <AppInput
                            className={
                              errors?.company?.type === "required"
                                ? "error"
                                : !!watch("company") &&
                                  !errors?.company &&
                                  !getFieldState("company")?.invalid
                                ? "success"
                                : ""
                            }
                            type="text"
                            onChange={onChange}
                            value={value}
                          />
                        )}
                      />
                      {errors?.company?.type === "required" && (
                        <span className="form-status error">
                          This field is required
                        </span>
                      )}
                      {!!watch("company") &&
                        !errors?.company &&
                        !getFieldState("company")?.invalid && (
                          <span className="form-status success">
                            Looks good!
                          </span>
                        )}
                    </div>
                    <div className="col-md-12 mb-4">
                      <label htmlFor="" className="form-label">
                        Phone Number
                      </label>
                      <Controller
                        control={control}
                        name="phone"
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <AppInput
                            className={
                              errors?.phone?.type === "required"
                                ? "error"
                                : !!watch("phone") &&
                                  !errors?.phone &&
                                  !getFieldState("phone")?.invalid
                                ? "success"
                                : ""
                            }
                            type="number"
                            onChange={onChange}
                            value={value}
                          />
                        )}
                      />
                      {errors?.phone?.type === "required" && (
                        <span className="form-status error">
                          This field is required
                        </span>
                      )}
                      {!!watch("phone") &&
                        !errors?.phone &&
                        !getFieldState("phone")?.invalid && (
                          <span className="form-status success">
                            Looks good!
                          </span>
                        )}
                    </div>
                    <div className="col-md-12 mb-4">
                      <Controller
                        control={control}
                        name="receive_communication"
                        rules={{
                          required: false,
                        }}
                        defaultValue={false}
                        render={({ field: { onChange, value } }) => (
                          <AppCheckbox
                            id={"receive_communication"}
                            checked={value}
                            onClick={(e) => onChange(e)}
                            label={
                              "I agree to receive other communications from Disaster Tech."
                            }
                          />
                        )}
                      />
                      <Controller
                        control={control}
                        name="allow_access_personal_data"
                        rules={{
                          required: false,
                        }}
                        defaultValue={true}
                        render={({ field: { onChange, value } }) => (
                          <AppCheckbox
                            id={"allow_access_personal_data"}
                            checked={value}
                            onClick={(e) => onChange(e)}
                            className={"mt-3"}
                            label={
                              "I agree to allow Disaster Technologies Incorporated to store and process my personal data."
                            }
                          />
                        )}
                      />
                    </div>
                    <div className="button-group">
                      <AppButton type={"submit"} className={"primary shadow"}>
                        Submit
                      </AppButton>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Section>
        <Section sectionClass="lrg pb-4 pb-md-5">
          <div className="row align-items-center pt-xl-5">
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3109.1839156057563!2d-77.040033!3d38.805339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b0f66ddc4f93%3A0x725d4619199ba90e!2s200%20N%20Union%20St%2C%20Alexandria%2C%20VA%2022314!5e0!3m2!1sen!2sus!4v1706693192690!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-6 col-xl-5 ms-auto">
              <h4>Disaster Tech Headquarters</h4>
              <p className="d-flex align-items-start align-items-md-center mb-md-2">
                <img className="me-2 mt-1 mt-md-0" src={IconLocation} alt="" />
                201 N Union Street, Suite 110, Alexandria, VA 22314
              </p>
              <p className="d-flex align-items-start align-items-md-center">
                <img className="me-2 mt-1 mt-md-0" src={IconCall} alt="" />
                (202) 838-3176
              </p>
              <Socials className="mt-4 mt-md-5 pt-3 pt-md-0" />
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
