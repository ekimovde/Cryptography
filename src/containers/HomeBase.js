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
    {
      id: 2,
      title: "Шифр Скитала",
      text:
        "Инструмент, используемый для осуществления перестановочного шифрования.",
      status: "complete",
      url: "/scitula",
    },
    {
      id: 3,
      title: "Шифр Квадрат Полибия",
      text:
        "Оригинальный код простой замены, одна из древнейших систем кодирования.",
      status: "complete",
      url: "/polybiusSquare",
    },
    {
      id: 4,
      title: "Шифр Цезаря",
      text:
        "Один из самых простых и наиболее широко известных методов шифрования.",
      status: "active",
      url: "/caesar",
    },
  ];

  return <Home array={array} />;
};

export default HomeBase;
