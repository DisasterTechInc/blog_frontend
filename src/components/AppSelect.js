import React from "react";
import Select from "react-select";

export const AppSelect = ({
  className,
  value,
  onChange,
  options,
  placeholder,
  isSearchable,
  isClearable,
  noOptionsMessage,
  ...props
}) => {
  return (
    <>
      <Select
        className={`form-selectbox ${(className && className) || ""}`}
        classNamePrefix="react-select"
        value={value}
        onChange={onChange}
        options={options || []}
        placeholder={`${placeholder || "Select an option"}`}
        isSearchable={isSearchable}
        isClearable={isClearable}
        noOptionsMessage={() => noOptionsMessage}
        {...props}
      />
    </>
  );
};
