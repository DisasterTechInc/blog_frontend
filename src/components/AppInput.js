import React from "react";

export const AppInput = ({
  className,
  value,
  type,
  disabled,
  readOnly,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <input
      className={`form-control ${(!!className && className) || ""}`}
      value={value || ""}
      type={type || "text"}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder || ""}
      onChange={onChange}
      {...props}
    />
  );
};
