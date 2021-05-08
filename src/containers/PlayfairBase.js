import React, { useState, useEffect } from "react";

import { Playfair } from "components";

import { validate, playfair } from "utils";

const PlayfairBase = () => {
  const [text, setText] = useState("");
  const [keyValue, setKeyValue] = useState("");
  const [lang, setLang] = useState("Русский");
  const [type, setType] = useState("Зашифровать");

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
      setText(playfair.encoding(text, keyValue, lang));

      setType("Расшифровать");
    } else {
      setText(playfair.decoding(text, keyValue, lang));

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

    if (validate.validateVigener(event.target.value)) {
      setKeyError("Некорректный ключ!");
    } else {
      setKeyError("");
    }

    if (!event.target.value) {
      setKeyError("Ключ не может быть пустым!");
    }
  };

  const onClickLangAdd = () => {
    if (lang !== "Русский") {
      return;
    } else {
      setLang("Английский");
    }

    if (text === "") {
      setTextError("Текст не может быть пустым!");
    } else if (validate.validateVigener(text, lang, "text")) {
      setTextError("Некорректный текст!");
    } else {
      setTextError("");
    }

    if (keyValue === "") {
      setKeyError("Ключ не может быть пустым!");
    } else if (validate.validateVigener(keyValue, lang, "key")) {
      setKeyError("Некорректный ключ!");
    } else {
      setKeyError("");
    }
  };

  const onClickLangSub = () => {
    if (lang !== "Английский") {
      return;
    } else {
      setLang("Русский");
    }

    if (text === "") {
      setTextError("Текст не может быть пустым!");
    } else if (validate.validateVigener(text, lang, "text")) {
      setTextError("Некорректный текст!");
    } else {
      setTextError("");
    }

    if (keyValue === "") {
      setKeyError("Ключ не может быть пустым!");
    } else if (validate.validateVigener(keyValue, lang, "key")) {
      setKeyError("Некорректный ключ!");
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
    <Playfair
      text={text}
      lang={lang}
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
      onClickLangAdd={onClickLangAdd}
      onClickLangSub={onClickLangSub}
      onClickTypeAdd={onClickTypeAdd}
      onClickTypeSub={onClickTypeSub}
    />
  );
};

export default PlayfairBase;
