import { Link } from "gatsby";
import React, { useState } from "react";
import IconDropdown from "assets/images/icon__angle--down.svg";

export const Nav = ({ isActive }) => {
  const [dropdowns, setDropdowns] = useState({ blog: false });

  const dropdownHandler = (target, value) => {
    let reset = {};
    for (const i in dropdowns) {
      reset = { ...reset, [i]: false };
    }

    setDropdowns({ ...reset, [target]: !value });
  };

  return (
    <>
      <nav className={`site-header__nav ${(isActive && "active") || ""}`}>
        <ul>
          <li>
            <Link activeClassName="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/about">
              About
            </Link>
          </li>
          <li>
            <span
              className={(dropdowns?.blog && "active") || ""}
              onClick={() => dropdownHandler("blog", dropdowns?.blog)}
            >
              Blog
              <img src={IconDropdown} alt="" />
            </span>
            {(dropdowns && dropdowns?.blog && (
              <ul>
                <li>
                  <Link activeClassName="active" to="/blog">
                    Articles &amp; press releases
                  </Link>
                </li>
                <li>
                  <Link activeClassName="active" to="/podcasts">
                    Podcasts
                  </Link>
                </li>
              </ul>
            )) ||
              null}
          </li>
          <li>
            <Link activeClassName="active" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/pratus">
              Pratus
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
