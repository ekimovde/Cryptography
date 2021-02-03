const encodeAtbash = (lang, values, setValues) => {
  const arr_ru = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const arr_RU = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

  const arr_en = "abcdefghijklmnopqrstuvwxyz";
  const arr_EN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let stringToSplit = values.split("");
  let stringEncoded = "";

  if (lang === "Русский") {
    stringToSplit.forEach((item) => {
      if (item.toUpperCase() === item && item !== " ") {
        stringEncoded += arr_RU[32 - (arr_RU.indexOf(item) + 1) + 1];
      } else if (item !== " ") {
        stringEncoded += arr_ru[32 - (arr_ru.indexOf(item) + 1) + 1];
      } else if (item === " ") {
        stringEncoded += " ";
      }
    });
  } else if (lang === "Английский") {
    stringToSplit.forEach((item) => {
      if (item.toUpperCase() === item && item !== " ") {
        stringEncoded += arr_EN[25 - (arr_EN.indexOf(item) + 1) + 1];
      } else if (item !== " ") {
        stringEncoded += arr_en[25 - (arr_en.indexOf(item) + 1) + 1];
      } else if (item === " ") {
        stringEncoded += " ";
      }
    });
  }

  return setValues(stringEncoded);
};

export default encodeAtbash;
