import React from "react";

import { Input } from "components";
import { arrowLeft, arrowRight } from "assets";

import "./Switch.scss";

const Switch = ({ label, name, value, onClickAdd, onClickSub }) => {
  return (
    <div className="form__block form__block-lang">
      <label htmlFor="text">{label}</label>

      <div className="form__group">
        <Input name={name} type="text" disabled={true} value={value} />

        <div className="form__buttons">
          <button
            type="button"
            className="form__btn form__btn-left"
            onClick={onClickSub}
          >
            <img src={arrowLeft} alt="" />
          </button>

          <button
            type="button"
            className="form__btn form__btn-right"
            onClick={onClickAdd}
          >
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Switch;
