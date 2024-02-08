import React from "react";

export const AppSwitcher = ({ className, checked, onChange, value }) => {
  return (
    <>
      <div className={`form-switcher ${!!className ? className : ""}`}>
        <input
          type="checkbox"
          id="is__switched"
          checked={checked}
          value={value}
          onChange={onChange}
        />
        <label htmlFor="is__switched"></label>
      </div>
    </>
  );
};
