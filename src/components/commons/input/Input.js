import React from "react";
//not modules
import "./Input.scss";

const Input = ({
  className,
  placeholder,
  value,
  children,
  onChange = () => false
}) => {
  return (
    <label className={`label ${className ? className : ""}`}>
      {children}
      <input
        className="label__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export { Input };
