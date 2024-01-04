import React from "react";

export const Section = ({ sectionClass, children }) => {
  return (
    <>
      <section className={sectionClass || ""}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};
