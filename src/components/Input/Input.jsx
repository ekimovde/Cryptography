import React from "react";

import "./Input.scss";

const Input = ({
  name,
  type = "text",
  value,
  disabled = false,
  onChange,
  onBlur,
}) => {
  return (
    <input
      name={name}
      className="input"
      type={type}
      value={value}
      disabled={disabled}
      onChange={(event) => onChange(event)}
      onBlur={onBlur}
    />
  );
};

export default Input;
