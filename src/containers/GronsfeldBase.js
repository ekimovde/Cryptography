import React, { useState, useEffect } from "react";

import { Gronsfeld } from "components";

import { validate, atbash } from "utils";

const GronsfeldBase = () => {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("Русский");
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
      atbash(lang, text, setText);

      setType("Расшифровать");
    } else {
      atbash(lang, text, setText);

      setType("Зашифровать");
    }
  };

  const onChangeText = (event) => {
    setText(event.target.value);

    if (!validate.validatePolybiusSquare(event.target.value, lang)) {
      setTextError("Некорректный текст!");
    } else {
      setTextError("");
    }

    if (!event.target.value) {
      setTextError("Текст не может быть пустым!");
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
    } else if (validate.validatePolybiusSquare(text, lang)) {
      setTextError("Некорректный текст!");
    } else {
      setTextError("");
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
    } else if (validate.validatePolybiusSquare(text, lang)) {
      setTextError("Некорректный текст!");
    } else {
      setTextError("");
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
    <Gronsfeld
      text={text}
      formValid={formValid}
      lang={lang}
      type={type}
      textDirty={textDirty}
      textError={textError}
      onSubmit={onSubmit}
      blurHandler={blurHandler}
      onChangeText={onChangeText}
      onClickLangAdd={onClickLangAdd}
      onClickLangSub={onClickLangSub}
      onClickTypeAdd={onClickTypeAdd}
      onClickTypeSub={onClickTypeSub}
    />
  );
};

export default GronsfeldBase;
