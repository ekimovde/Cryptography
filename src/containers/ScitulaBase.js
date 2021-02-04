import React, { useState } from "react";

import { Scitula } from "components";

const ScitulaBase = () => {
  const [values, setValues] = useState("");
  // eslint-disable-next-line
  const [encoded, setEncoded] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    setValues(event.target.value);
  };

  return (
    <Scitula
      values={values}
      encoded={encoded}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default ScitulaBase;
