import React from "react";
import IconFacebook from "assets/images/icon__facebook.svg";
import IconTwitter from "assets/images/icon__twitter.svg";
import IconInstagram from "assets/images/icon__instagram.svg";
import IconYoutube from "assets/images/icon__youtube.svg";

export const Socials = ({ className }) => {
  return (
    <ul className={`socials ${className || ""}`}>
      <li>
        <a
          href="https://www.facebook.com/disastertech"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconFacebook} alt="" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/disastertechinc"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconTwitter} alt="" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/disastertechinc/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconInstagram} alt="" />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@disastertech4973"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconYoutube} alt="" />
        </a>
      </li>
    </ul>
  );
};
