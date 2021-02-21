import React from "react";

import { Form, TextArea, Switch } from "components";

import "./PolybiusSquare.scss";

const PolybiusSquare = ({
  text,
  keyValue,
  lang,
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
  onClickLangAdd,
  onClickLangSub,
  onClickTypeAdd,
  onClickTypeSub,
}) => {
  return (
    <div className="polybius-square">
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

export default PolybiusSquare;
