import React from "react";

import { TextArea, Switch, Form } from "components";

import "./Gronsfeld.scss";

const Gronsfeld = ({
  text,
  keyValue,
  formValid,
  textDirty,
  keyDirty,
  textError,
  keyError,
  type,
  onSubmit,
  blurHandler,
  onChangeText,
  onChangeKey,
  onClickTypeAdd,
  onClickTypeSub,
}) => {
  return (
    <div className="gronsfeld">
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

export default Gronsfeld;
