import * as React from "react";
import Graphics from "assets/images/graphics__banner.png";
import { AppButton } from "./AppButton";

export default function Banner() {
  return (
    <>
      <section className="site-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-1 order-lg-0 mt-4 mt-lg-0">
              <h3 className="lrg">
                Prepared and Ready for Crisis in One Platform
              </h3>
              <p className="text-l mb-4">
                Disaster Tech provides practitioner-driven, crisis management
                software for smarter decision making in preparedness and
                response to save lives and protect the environment. Leverage
                PRATUS, our platform, to predict, prepare, and decide for any
                crisis.
              </p>
              <AppButton className="primary">Schedule a Demo</AppButton>
            </div>
            <div className="col-lg-7">
              <img src={Graphics} alt="" className="w-100 d-block" />
            </div>
          </div>
        </div>
        <span className="circle leftBottom"></span>
        <span className="circle rightTop"></span>
        <span className="circle center"></span>
      </section>
    </>
  );
}
