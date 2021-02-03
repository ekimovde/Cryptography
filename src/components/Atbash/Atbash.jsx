import React from "react";
import classNames from "classnames";

import { Input, Button } from "components";

import "./Atbash.scss";

const Atbash = ({
  values,
  encoded,
  arrButtons,
  lang,
  valid,
  onIndex,
  onSubmit,
  onChange,
  onClickLang,
}) => {
  return (
    <div className="atbash">
      <form className="form" onSubmit={onSubmit}>
        <div className="form__head">
          <h2 className="form__title">Форма шифрования!</h2>
          <p className="form__text">Давайте проверим его</p>
        </div>

        <div className="form__offer">
          <div className="form__block">
            <label htmlFor="text">
              {!encoded ? "Исходный текст" : "Зашифрованный текст"}
            </label>
            <Input
              name={"text"}
              type="text"
              value={values}
              onChange={onChange}
            />
          </div>

          <div className="form__block form__block-lang">
            <label htmlFor="text">Выберите язык</label>

            <div className="form__group">
              <Input
                name={"lang"}
                type="text"
                disabled={true}
                value={lang}
                onChange={onChange}
              />

              <div className="form__buttons">
                {arrButtons.map((item, index) => {
                  return (
                    <button
                      type="button"
                      className={classNames(`form__btn ${item.className}`)}
                      onClick={() => onClickLang(index)}
                      key={index}
                      disabled={onIndex === index}
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

export default Atbash;
