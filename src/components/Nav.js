import { Link } from "gatsby";
import React from "react";

export const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link
              activeClassName="active"
              activeStyle={{ fontWeight: "bold" }}
              partiallyActive={true}
              to="/"
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              activeClassName="active"
              activeStyle={{ fontWeight: "bold" }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              activeStyle={{ fontWeight: "bold" }}
              to="/contact"
            >
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};
