import React, { useState, useEffect } from "react";

import { PolybiusSquare } from "components";
import { validate, polybiusSquare } from "utils";

const PolybiusSquareBase = () => {
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

  const onSubmit = async (event) => {
    event.preventDefault();

    let arrValues = text.split("");

    if (lang === "Английский") {
      if (arrValues.indexOf("J") !== -1) {
        let index = arrValues.indexOf("J");
        arrValues[index] = "I";
      }
    }

    let alph = await polybiusSquare.createAlphabet(keyValue, lang);

    if (type === "Зашифровать") {
      setText(polybiusSquare.encoded(alph, arrValues, lang));

      setType("Расшифровать");
    } else if (type === "Расшифровать") {
      setType("Зашифровать");

      setText(polybiusSquare.decoded(alph, text, lang));
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

  const onChangeKey = (event) => {
    setKeyValue(event.target.value);

    if (!validate.validatePolybiusSquare(event.target.value, lang)) {
      setKeyError("Некорректный текст!");
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
    } else if (validate.validatePolybiusSquare(text, lang)) {
      setTextError("Некорректный текст!");
    } else {
      setTextError("");
    }

    if (keyValue === "") {
      setKeyError("Ключ не может быть пустым!");
    } else if (validate.validatePolybiusSquare(keyValue, lang)) {
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
    } else if (validate.validatePolybiusSquare(text, lang)) {
      setTextError("Некорректный текст!");
    } else {
      setTextError("");
    }

    if (keyValue === "") {
      setKeyError("Ключ не может быть пустым!");
    } else if (validate.validatePolybiusSquare(keyValue, lang)) {
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
    <PolybiusSquare
      text={text}
      keyValue={keyValue}
      lang={lang}
      type={type}
      textDirty={textDirty}
      keyDirty={keyDirty}
      textError={textError}
      keyError={keyError}
      formValid={formValid}
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      blurHandler={blurHandler}
      onChangeKey={onChangeKey}
      onClickLangAdd={onClickLangAdd}
      onClickLangSub={onClickLangSub}
      onClickTypeAdd={onClickTypeAdd}
      onClickTypeSub={onClickTypeSub}
    />
  );
};

export default PolybiusSquareBase;
