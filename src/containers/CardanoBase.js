import React, { useState, useEffect } from "react";

import { Cardano } from "components";

import { cardano } from "utils";

const CardanoBase = () => {
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

    if (type === "Зашифровать") {
      setText(cardano.encode(text, rows));

      setType("Расшифровать");
    } else {
      setText(cardano.decode(text, rows));

      setType("Зашифровать");
    }
  };

  const onChangeText = (event) => {
    setText(event.target.value);

    if (!event.target.value) {
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
    <Cardano
      text={text}
      formValid={formValid}
      rows={rows}
      type={type}
      textDirty={textDirty}
      textError={textError}
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

export default CardanoBase;
