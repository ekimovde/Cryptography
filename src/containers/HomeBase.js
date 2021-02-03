import React from "react";

import { Home } from "components";

const HomeBase = () => {
  const array = [
    {
      id: 1,
      title: "Шифр Атбаш",
      text: "Простой шифр подстановки для алфавитного письма.",
      status: "complete",
      url: "/atbash",
    },
  ];

  return <Home array={array} />;
};

export default HomeBase;
