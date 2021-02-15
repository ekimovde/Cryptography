import React, { useState } from "react";

import { Atbash } from "components";
import { arrowLeft, arrowRight } from "assets";

import { validate, encodeAtbash } from "utils";

const AtbashBase = () => {
  const [values, setValues] = useState("");
  const [encoded, setEncoded] = useState(false);
  const [lang, setLang] = useState("Русский");
  const [valid, setValid] = useState(false);
  const [onIndex, setOnIndex] = useState(0);

  const arrButtons = [
    {
      className: "form__btn-right",
      img: arrowLeft,
    },
    {
      className: "form__btn-left",
      img: arrowRight,
    },
  ];

  const onSubmit = (event) => {
    event.preventDefault();

    encodeAtbash(lang, values, setValues);

    setEncoded(!encoded);
  };

  const onChange = (event) => {
    setValid(validate.validateAtbash(event.target.value, lang));

    setValues(event.target.value);
  };

  const onClickLang = (index) => {
    if (index === 0) {
      setLang("Русский");
      setOnIndex(index);

      if (values === "") {
        setValid(false);
      } else {
        setValid(!validate.validateAtbash(values, lang));
      }
    } else {
      setLang("Английский");
      setOnIndex(index);

      if (values === "") {
        setValid(false);
      } else {
        setValid(!validateAtbash(values, lang));
      }
    }
  };

  return (
    <Atbash
      values={values}
      encoded={encoded}
      arrButtons={arrButtons}
      lang={lang}
      valid={valid}
      onIndex={onIndex}
      onSubmit={onSubmit}
      onChange={onChange}
      onClickLang={onClickLang}
    />
  );
};

export default AtbashBase;
