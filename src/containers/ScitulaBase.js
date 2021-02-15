import React, { useState } from "react";

import { Scitula } from "components";
import { arrowLeft, arrowRight } from "assets";

import { scitula, validate } from "utils";

const ScitulaBase = () => {
  const [values, setValues] = useState("");
  const [encoded, setEncoded] = useState(false);
  const [rows, setRows] = useState(1); // количество строк
  const [valid, setValid] = useState(false);

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

    const len = values.length;
    const columns = Math.floor((len - 1) / rows + 1); // количество столбцов

    let array = values.split("");
    let myMatrix = null;

    if (encoded === false) {
      myMatrix = scitula.writeMatrixArray(rows, columns, array);

      console.log("1", myMatrix);

      const { arr, str } = scitula.encodeScitula(rows, columns, myMatrix);

      setValues(str);

      console.log("2", arr);
      console.log("3", values);

      setEncoded(!encoded);
    } else if (encoded === true) {
      const { decodeArray, decodeStr } = scitula.decodeScitula(
        rows,
        columns,
        values
      );

      setValues(decodeStr);

      console.log("4", decodeArray);
      console.log("5", values);

      setEncoded(false);
    }
  };

  const onChange = (event) => {
    setValues(event.target.value);

    setValid(validate.validateScitula(event.target.value));
  };

  const onClickAddRow = (index) => {
    if (index === 0) {
      if (rows !== 1) {
        setRows(rows - 1);
      }
    } else if (index === 1) {
      setRows(rows + 1);
    }
  };

  return (
    <Scitula
      values={values}
      encoded={encoded}
      arrButtons={arrButtons}
      rows={rows}
      valid={valid}
      onSubmit={onSubmit}
      onChange={onChange}
      onClickAddRow={onClickAddRow}
    />
  );
};

export default ScitulaBase;
