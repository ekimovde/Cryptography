import React from "react";
import classNames from "classnames";

import "./Button.scss";

const Button = ({ children, className, valid = true }) => {
  return (
    <button
      className={classNames(`btn ${className}`, {
        disabled: !valid,
      })}
      type="submit"
      disabled={!valid}
    >
      {children}
    </button>
  );
};

export default Button;
