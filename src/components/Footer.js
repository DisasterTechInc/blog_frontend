import React from "react";
import { Link } from "gatsby";
import Logo from "assets/images/logo.svg";
import { useSiteMetadata } from "hooks/use-site-metadata";
import { AppButton } from "./AppButton";
import { AppInput } from "./AppInput";
import { useForm, Controller } from "react-hook-form";

export const Footer = () => {
  const {
    handleSubmit,
    control,
    getFieldState,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const { title, copyright } = useSiteMetadata();

  const onSubmit = async (data) => {
    console.log("form data", data);
  };
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <span className="site-footer__logo">
                <img src={Logo} alt={title} />
              </span>
              <p className="text-s m-0">
                Disaster Tech, a veteran-owned public benefit company, offers
                decision science technologies for situational awareness,
                intelligence, and crisis management. We provide
                practitioner-driven, crisis management software for smarter
                decision making in preparedness and response to ultimately save
                lives and protect the environment.
              </p>
              <div className="site-footer__subscribe">
                <label className="form-label text-s">
                  Subscribe to our newsletter
                </label>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex align-items-center">
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
                    <AppButton type="submit" className="md primary">
                      Subscribe
                    </AppButton>
                  </div>
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
                      <span className="form-status success">Looks good!</span>
                    )}
                </form>
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 ms-auto">
              <div className="row">
                <div className="col-md-4">
                  <ul className="site-footer__nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/pratus">Pratus</Link>
                    </li>
                  </ul>
                  <ul className="site-footer__nav">
                    <li>
                      <Link to="/terms">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mt-4 mt-md-0">
                  <ul className="site-footer__nav">
                    <li>
                      <a
                        href="https://twitter.com/disastertechinc"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/disastertech"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@disastertech4973"
                        target="_blank"
                        rel="noreferrer"
                      >
                        YouTube
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/disastertechinc/?hl=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instragram
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mt-4 mt-md-0">
                  <span className="d-block mb-2 color-white">Contact Us</span>
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p
                className="m-0 text-xs opacity-half"
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
