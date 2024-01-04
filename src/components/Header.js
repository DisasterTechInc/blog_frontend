import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Nav } from "./Nav";
import Logo from "../assets/images/logo.svg";
import IconSignIn from "../assets/images/icon__signin.svg";
import IconSignUp from "../assets/images/icon__user.svg";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { title } = useSiteMetadata();

  useEffect(() => {
    if (showMobileNav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMobileNav]);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex align-items-center">
              <Link to={"/"} title={title} className="site-header__logo">
                <img src={Logo} alt={title} />
              </Link>
              <button
                className={`site-header__toggle ${
                  (showMobileNav && "active") || ""
                }`}
                onClick={() => setShowMobileNav(!showMobileNav)}
              >
                <svg viewBox="0 0 100 100">
                  <path
                    className="line top"
                    d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                  />
                  <path className="line middle" d="m 70,50 h -40" />
                  <path
                    className="line bottom"
                    d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                  />
                </svg>
              </button>
              <Nav isActive={showMobileNav} />
              <div className="site-header__buttons button-group ms-lg-auto">
                <button className="button secondary sm">
                  <img src={IconSignIn} alt="" className="me-lg-2" />
                  <span className="d-none d-lg-block">Sign in</span>
                </button>
                <button className="button primary sm">
                  <img src={IconSignUp} alt="" className="me-lg-2" />
                  <span className="d-none d-lg-block">Sign up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
