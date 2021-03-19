import React from "react";

import { TextArea, Switch, Form } from "components";

import "./Cardano.scss";

const Cardano = ({
  text,
  rows,
  formValid,
  textDirty,
  textError,
  type,
  onSubmit,
  blurHandler,
  onChangeText,
  onClickRowAdd,
  onClickRowSub,
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
            label={"Выберите размер решётки"}
            name={"rows"}
            value={rows}
            onClickAdd={onClickRowAdd}
            onClickSub={onClickRowSub}
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
