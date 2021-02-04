import React from "react";

import { Input, Button } from "components";

import "./Scitula.scss";

const Scitula = ({ values, encoded, onSubmit, onChange }) => {
  return (
    <div className="scitula">
      <form className="form" onSubmit={onSubmit}>
        <div className="form__head">
          <h2 className="form__title">Форма шифрования!</h2>
          <p className="form__text">Давайте проверим его</p>
        </div>

        <div className="form__offer">
          <div className="form__block">
            <label htmlFor="text">Исходный текст</label>
            <Input
              name={"text"}
              type="text"
              value={values}
              onChange={onChange}
            />
          </div>
        </div>

        <Button className="form__btn">
          {!encoded ? "Зашифровать" : "Расшифровать"}
        </Button>
      </form>
    </div>
  );
};

export default Scitula;
