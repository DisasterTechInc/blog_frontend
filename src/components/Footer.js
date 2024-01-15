import React from "react";
import { Link } from "gatsby";
import Logo from "assets/images/logo.svg";
import { useSiteMetadata } from "hooks/use-site-metadata";

export const Footer = () => {
  const { title, copyright } = useSiteMetadata();

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
                <div className="d-flex align-items-center">
                  <input
                    type="email"
                    className="form-control md"
                    placeholder="Your Email"
                  />
                  <button type="button" className="button md primary">
                    Subscribe
                  </button>
                </div>
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
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <ul className="site-footer__nav">
                    <li>
                      <Link to="/">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
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
