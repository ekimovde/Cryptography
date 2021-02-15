import React from "react";
import classNames from "classnames";

import { Input, Button } from "components";

import "./Scitula.scss";

const Scitula = ({
  values,
  encoded,
  rows,
  arrButtons,
  valid,
  onSubmit,
  onChange,
  onClickAddRow,
}) => {
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

          <div className="form__block form__block-lang">
            <label htmlFor="text">Выберите количество столбцов</label>

            <div className="form__group">
              <Input
                name={"lang"}
                type="text"
                disabled={true}
                value={rows}
                onChange={onChange}
              />

              <div className="form__buttons">
                {arrButtons.map((item, index) => {
                  return (
                    <button
                      type="button"
                      className={classNames(`form__btn ${item.className}`)}
                      onClick={() => onClickAddRow(index)}
                      key={index}
                    >
                      <img src={item.img} alt="" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Button className="form__btn" valid={valid}>
          {!encoded ? "Зашифровать" : "Расшифровать"}
        </Button>
      </form>
    </div>
  );
};

export default Scitula;
