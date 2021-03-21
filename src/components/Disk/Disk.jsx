import React from "react";

import { TextArea, Switch, Form } from "components";

import "./Disk.scss";

const Disk = ({
  text,
  keyValueAlph,
  keyValueText,
  formValid,
  textDirty,
  keyAlphDirty,
  keyTextDirty,
  textError,
  keyAlphError,
  keyTextError,
  type,
  onSubmit,
  blurHandler,
  onChangeText,
  onChangeKeyAplh,
  onChangeKeyText,
  onClickTypeAdd,
  onClickTypeSub,
}) => {
  return (
    <div className="disk">
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
            <label htmlFor="keyAlph">Ключ для алфавита</label>
            <TextArea
              name={"keyAlph"}
              type="text"
              value={keyValueAlph}
              onChange={onChangeKeyAplh}
              onBlur={blurHandler}
            />
            {keyAlphDirty && keyAlphError && (
              <div className="form__error">{keyAlphError}</div>
            )}
          </div>

          <div className="form__block">
            <label htmlFor="keyText">Ключ для текста</label>
            <TextArea
              name={"keyText"}
              type="text"
              value={keyValueText}
              onChange={onChangeKeyText}
              onBlur={blurHandler}
            />
            {keyTextDirty && keyTextError && (
              <div className="form__error">{keyTextError}</div>
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

export default Disk;
