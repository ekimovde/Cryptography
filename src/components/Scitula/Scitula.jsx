import React from "react";

import { Form, TextArea, Switch } from "components";

import "./Scitula.scss";

const Scitula = ({
  text,
  rows,
  type,
  textDirty,
  textError,
  formValid,
  onSubmit,
  blurHandler,
  onChangeText,
  onClickRowAdd,
  onClickRowSub,
  onClickTypeAdd,
  onClickTypeSub,
}) => {
  return (
    <div className="scitula">
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
            label={"Выберите количество строк"}
            name={"rows"}
            value={rows}
            onClickAdd={onClickRowAdd}
            onClickSub={onClickRowSub}
            check={null}
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

export default Scitula;
