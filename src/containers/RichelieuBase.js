import React, { useState, useEffect } from "react";

import { Richelieu } from "components";

import { richelieu } from "utils";

const RichelieuBase = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState("Зашифровать");
  const [keyValue, setKeyValue] = useState("");

  const [textDirty, setTextDirty] = useState(false);
  const [keyDirty, setKeyDirty] = useState(false);
  const [textError, setTextError] = useState("Текст не может быть пустым!");
  const [keyError, setKeyError] = useState("Ключ не может быть пустым!");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (textError || keyError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [textError, keyError]);

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "text":
        setTextDirty(true);
        break;
      case "key":
        setKeyDirty(true);
        break;
      default:
        return null;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (type === "Зашифровать") {
      setText(richelieu.encoded(text, keyValue));

      setType("Расшифровать");
    } else {
      setText(richelieu.decoded(text, keyValue));

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

  const onChangeKey = (event) => {
    setKeyValue(event.target.value);

    if (!event.target.value) {
      setKeyError("Ключ не может быть пустым!");
    } else {
      setKeyError("");
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
    <Richelieu
      text={text}
      keyValue={keyValue}
      formValid={formValid}
      type={type}
      textDirty={textDirty}
      keyDirty={keyDirty}
      textError={textError}
      keyError={keyError}
      onSubmit={onSubmit}
      blurHandler={blurHandler}
      onChangeKey={onChangeKey}
      onChangeText={onChangeText}
      onClickTypeAdd={onClickTypeAdd}
      onClickTypeSub={onClickTypeSub}
    />
  );
};

export default RichelieuBase;
