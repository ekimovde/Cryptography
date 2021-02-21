import React from "react";

import "./TextArea.scss";

const TextArea = ({
  name,
  type = "text",
  value,
  disabled = false,
  onChange,
  onBlur,
}) => {
  return (
    <textarea
      name={name}
      className="textarea"
      type={type}
      value={value}
      disabled={disabled}
      onChange={(event) => onChange(event)}
      onBlur={(event) => onBlur(event)}
    />
  );
};

export default TextArea;
