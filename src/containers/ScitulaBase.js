import React, { useState, useEffect } from "react";

import { Scitula } from "components";

import { scitula, validate } from "utils";

const ScitulaBase = () => {
  const [text, setText] = useState("");
  const [rows, setRows] = useState(1);
  const [type, setType] = useState("Зашифровать");

  const [textDirty, setTextDirty] = useState(false);
  const [textError, setTextError] = useState("Текст не может быть пустым!");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (textError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [textError]);

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "text":
        setTextDirty(true);
        break;
      default:
        return null;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const len = text.length;
    const columns = Math.floor((len - 1) / rows + 1);

    let array = text.split("");
    let myMatrix = null;

    if (type === "Зашифровать") {
      myMatrix = scitula.writeMatrixArray(rows, columns, array);

      console.log("1", myMatrix);

      const { arr, str } = scitula.encodeScitula(rows, columns, myMatrix);

      setText(str);

      console.log("2", arr);
      console.log("3", text);

      setType("Расшифровать");
    } else if (type === "Расшифровать") {
      const { decodeArray, decodeStr } = scitula.decodeScitula(
        rows,
        columns,
        text
      );

      setText(decodeStr);

      console.log("4", decodeArray);
      console.log("5", decodeStr);

      setType("Зашифровать");
    }
  };

  const onChangeText = (event) => {
    setText(event.target.value);

    if (!validate.validateScitula(event.target.value)) {
      setTextError("Текст не может быть пустым!");
    } else {
      setTextError("");
    }
  };

  const onClickRowAdd = () => {
    setRows(rows + 1);
  };

  const onClickRowSub = () => {
    if (rows !== 1) {
      setRows(rows - 1);
    }
  };

  const onClickTypeAdd = () => {
    if (type !== "Зашифровать") {
      return;
    } else {
      setType("Расшифровать");
    }
  };

  const onClickTypeSub = () => {
    if (type !== "Расшифровать") {
      return;
    } else {
      setType("Зашифровать");
    }
  };

  return (
    <Scitula
      text={text}
      rows={rows}
      type={type}
      textDirty={textDirty}
      textError={textError}
      formValid={formValid}
      onSubmit={onSubmit}
      blurHandler={blurHandler}
      onChangeText={onChangeText}
      onClickRowAdd={onClickRowAdd}
      onClickRowSub={onClickRowSub}
      onClickTypeAdd={onClickTypeAdd}
      onClickTypeSub={onClickTypeSub}
    />
  );
};

export default ScitulaBase;
