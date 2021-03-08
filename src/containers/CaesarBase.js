import React, { useState, useEffect } from "react";

import { Caesar } from "components";
import { caesar } from "utils";

const CaesarBase = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState("Зашифровать");
  const [shift, setShift] = useState(0);

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

  const onSubmit = async (event) => {
    event.preventDefault();

    if (type === "Зашифровать") {
      setType("Расшифровать");

      setText(caesar.encoded(text, shift, type));
    } else if (type === "Расшифровать") {
      setType("Зашифровать");

      setText(caesar.encoded(text, shift, type));
    }
  };

  const onChangeText = (event) => {
    setText(event.target.value);

    setTextError("");

    if (!event.target.value) {
      setTextError("Текст не может быть пустым!");
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

  const onClickShiftAdd = () => {
    setShift(shift + 1);
  };

  const onClickShiftSub = () => {
    setShift(shift - 1);
  };

  return (
    <Caesar
      text={text}
      type={type}
      shift={shift}
      textDirty={textDirty}
      textError={textError}
      formValid={formValid}
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      blurHandler={blurHandler}
      onClickTypeAdd={onClickTypeAdd}
      onClickTypeSub={onClickTypeSub}
      onClickShiftAdd={onClickShiftAdd}
      onClickShiftSub={onClickShiftSub}
    />
  );
};

export default CaesarBase;
