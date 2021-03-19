import React, { useState, useEffect } from "react";

import { Disk } from "components";

import { validate, disk } from "utils";

const DiskBase = () => {
  const [text, setText] = useState("");
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
      disk.encoding(text);

      setType("Расшифровать");
    } else {
      disk.decoding(text);

      setType("Зашифровать");
    }
  };

  const onChangeText = (event) => {
    setText(event.target.value);

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

  return (
    <Disk
      text={text}
      formValid={formValid}
      type={type}
      textDirty={textDirty}
      textError={textError}
      onSubmit={onSubmit}
      blurHandler={blurHandler}
      onChangeText={onChangeText}
      onClickTypeAdd={onClickTypeAdd}
      onClickTypeSub={onClickTypeSub}
    />
  );
};

export default DiskBase;
