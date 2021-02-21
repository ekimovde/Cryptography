import React from "react";

import { Button } from "components";

import "./Form.scss";

const Form = ({ valid, type, onSubmit, children }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__head">
        <h2 className="form__title">Форма шифрования!</h2>
        <p className="form__text">Давайте проверим его</p>
      </div>

      {children}

      <Button className="form__btn" valid={valid}>
        {type === "Зашифровать" ? "Зашифровать" : "Расшифровать"}
      </Button>
    </form>
  );
};

export default Form;
