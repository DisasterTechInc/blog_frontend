import React from "react";

export const AppCheckbox = ({
  className,
  disabled,
  checked,
  id,
  label,
  onClick,
}) => {
  return (
    <>
      <div
        className={`form-checkbox  ${(className && className) || ""}`}
        key={id}
      >
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onClick={onClick}
          id={id}
          readOnly
        />
        <span className="icon"></span>
        {label ? (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        ) : null}
      </div>
    </>
  );
};
