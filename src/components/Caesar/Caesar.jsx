import React from "react";

import { Form, TextArea, Switch } from "components";

import "./Caesar.scss";

const Caesar = ({
  text,
  type,
  shift,
  textDirty,
  textError,
  formValid,
  onSubmit,
  onChangeText,
  blurHandler,
  onClickTypeAdd,
  onClickTypeSub,
  onClickShiftAdd,
  onClickShiftSub,
}) => {
  return (
    <div className="caesar">
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
            label={"Выберите сдвиг"}
            name={"shift"}
            value={shift}
            onClickAdd={onClickShiftAdd}
            onClickSub={onClickShiftSub}
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

export default Caesar;
