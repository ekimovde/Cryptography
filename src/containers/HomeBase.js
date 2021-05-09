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
      status: "complete",
      url: "/caesar",
    },
    {
      id: 5,
      title: "Шифр Решётка Кардано",
      text:
        "Исторически первая известная шифровальная решётка, трафарет, применявшийся для шифрования и дешифрования.",
      status: "active",
      url: "/cardano",
    },
    {
      id: 6,
      title: "Шифр Ришелье",
      text:
        "Метод защиты информации, который основан на применении решётки Кардано.",
      status: "complete",
      url: "/richelieu",
    },
    {
      id: 7,
      title: "Шифр Диск Альберти",
      text: "Шифр многоалфавитной замены.",
      status: "complete",
      url: "/disk",
    },
    {
      id: 8,
      title: "Шифр Гронсфельда",
      text:
        "Полиалфавитный подстановочный шифр создан графом Гронсвельдом (руководителем первой дешифровальной службы Германии) в XVII веке.",
      status: "complete",
      url: "/gronsfeld",
    },
    {
      id: 9,
      title: "Шифр Виженера",
      text:
        "Метод полиалфавитного шифрования буквенного текста с использованием ключевого слова.",
      status: "complete",
      url: "/vigener",
    },
    {
      id: 10,
      title: "Шифр Виженера",
      text:
        "Метод полиалфавитного шифрования буквенного текста с использованием ключевого слова.",
      status: "complete",
      url: "/vigener",
    },
    {
      id: 11,
      title: "Шифр Плейфера",
      text:
        "Ручная симметричная техника шифрования, в которой впервые использована замена биграмм.",
      status: "active",
      url: "/playfair",
    },
    {
      id: 12,
      title: "Криптосистема Хилла",
      text:
        "Полиграммный шифр подстановки, основанный на линейной алгебре и модульной арифметике.",
      status: "active",
      url: "/hill",
    },
    {
      id: 13,
      title: "Шифр Вернама",
      text: "Cистема симметричного шифрования.",
      status: "complete",
      url: "/vernam",
    },
  ];

  return <Home array={array} />;
};

export default HomeBase;
