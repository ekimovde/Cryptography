import React from "react";

import { TextArea, Switch, Form } from "components";

import "./Vigener.scss";

const Vigener = ({
  text,
  lang,
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
  onClickLangAdd,
  onClickLangSub,
  onClickTypeAdd,
  onClickTypeSub,
}) => {
  return (
    <div className="vigener">
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

export default Vigener;
