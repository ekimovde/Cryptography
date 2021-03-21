import React, { useState, useEffect } from "react";

import { Disk } from "components";

import { disk } from "utils";

const DiskBase = () => {
  const [text, setText] = useState("");
  const [keyValueAlph, setKeyValueAlph] = useState("");
  const [keyValueText, setKeyValueText] = useState("");
  const [type, setType] = useState("Зашифровать");

  const [textDirty, setTextDirty] = useState(false);
  const [keyAlphDirty, setKeyAlphDirty] = useState(false);
  const [keyTextDirty, setKeyTextDirty] = useState(false);
  const [textError, setTextError] = useState("Текст не может быть пустым!");
  const [keyAlphError, setKeyAlphError] = useState(
    "Ключ для алфавита не может быть пустым!"
  );
  const [keyTextError, setKeyTextError] = useState(
    "Ключ для текста не может быть пустым!"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (textError || keyAlphError || keyTextError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [textError, keyAlphError, keyTextError]);

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "text":
        setTextDirty(true);
        break;
      case "keyAlph":
        setKeyAlphDirty(true);
        break;
      case "keyText":
        setKeyTextDirty(true);
        break;
      default:
        return null;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (type === "Зашифровать") {
      setText(
        disk.encoding(
          text.toLowerCase(),
          keyValueAlph.toLowerCase(),
          keyValueText.toLowerCase()
        )
      );

      setType("Расшифровать");
    } else {
      setText(
        disk.decoding(
          text.toLowerCase(),
          keyValueAlph.toLowerCase(),
          keyValueText.toLowerCase()
        )
      );

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

  const onChangeKeyAplh = (event) => {
    setKeyValueAlph(event.target.value);

    if (!event.target.value) {
      setKeyAlphError("Ключ для алфавита не может быть пустым!");
    } else {
      setKeyAlphError("");
    }
  };

  const onChangeKeyText = (event) => {
    setKeyValueText(event.target.value);

    if (!event.target.value) {
      setKeyTextError("Ключ для текста не может быть пустым!");
    } else {
      setKeyTextError("");
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
      keyValueAlph={keyValueAlph}
      keyValueText={keyValueText}
      formValid={formValid}
      type={type}
      textDirty={textDirty}
      keyAlphDirty={keyAlphDirty}
      keyTextDirty={keyTextDirty}
      textError={textError}
      keyAlphError={keyAlphError}
      keyTextError={keyTextError}
      onSubmit={onSubmit}
      blurHandler={blurHandler}
      onChangeText={onChangeText}
      onChangeKeyAplh={onChangeKeyAplh}
      onChangeKeyText={onChangeKeyText}
      onClickTypeAdd={onClickTypeAdd}
      onClickTypeSub={onClickTypeSub}
    />
  );
};

export default DiskBase;
