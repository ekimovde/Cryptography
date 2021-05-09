import React from "react";

import { Form, TextArea, Switch } from "components";

import "./Vernam.scss";

const Vernam = ({
  text,
  keyValue,
  type,
  textDirty,
  keyDirty,
  textError,
  keyError,
  formValid,
  onSubmit,
  onChangeText,
  blurHandler,
  onChangeKey,
  onClickTypeAdd,
  onClickTypeSub,
}) => {
  return (
    <div className="vernam">
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

          <div className="form__block">
            <label htmlFor="key">Ключ</label>
            <TextArea
              name={"key"}
              type="text"
              value={keyValue}
              onChange={onChangeKey}
              onBlur={blurHandler}
            />
            {keyDirty && keyError && (
              <div className="form__error">{keyError}</div>
            )}
          </div>

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

export default Vernam;
