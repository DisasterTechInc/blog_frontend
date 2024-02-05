import React from "react";

export const AppButton = ({
  className,
  id,
  custom,
  children,
  disabled,
  type,
  ...props
}) => {
  return (
    <>
      <button
        id={id}
        className={`${
          !custom
            ? `button ${!!className ? className : ""}`
            : `button custom ${!!className ? className : ""}`
        }`}
        disabled={disabled}
        type={type || "button"}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
