import React from "react";

import { TextArea, Switch, Form } from "components";

import "./Cardano.scss";

const Cardano = ({
  text,
  lang,
  formValid,
  textDirty,
  textError,
  type,
  onSubmit,
  blurHandler,
  onChangeText,
  onClickLangAdd,
  onClickLangSub,
  onClickTypeAdd,
  onClickTypeSub,
}) => {
  return (
    <div className="cardano">
      <Form valid={formValid} type={type} onSubmit={onSubmit}>
        <div className="form__offer">
          <div className="form__block">
            <label htmlFor="text">Текст</label>
            <TextArea
              name={"text"}
              type="text"
              value={text}
              onChange={onChangeText}
              onBlur={blurHandler}
            />
            {textDirty && textError && (
              <div className="form__error">{textError}</div>
            )}
          </div>

          <Switch
            label={"Выберите язык"}
            name={"lang"}
            value={lang}
            onClickAdd={onClickLangAdd}
            onClickSub={onClickLangSub}
          />

          <Switch
            label={"Выберите метод"}
            name={"type"}
            value={type}
            onClickAdd={onClickTypeAdd}
            onClickSub={onClickTypeSub}
          />
        </div>
      </Form>
    </div>
  );
};

export default Cardano;
