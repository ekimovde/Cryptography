const vigener = {
  encoding: (text, key, type) => {
    const arr_ru = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    const arr_en = "abcdefghijklmnopqrstuvwxyz";

    const arr_RU = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    const arr_EN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let strKey = key;
    let strEncoded = "";

    if (text.length > strKey.length) {
      while (strKey.length !== text.length) {
        for (let i = 0; i < key.length; i++) {
          if (text.length !== strKey.length) {
            strKey += key[i];
          } else {
            break;
          }
        }
      }
    }

    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        strEncoded += " ";
      } else if (text[i] === ",") {
        strEncoded += ",";
      } else if (text[i] === ".") {
        strEncoded += ".";
      } else if (/^\d+$/.test(+text[i])) {
        strEncoded += text[i];
      } else {
        if (arr_en.indexOf(text[i]) !== -1) {
          let indexText = arr_en.indexOf(text[i]);
          let indexKey = arr_en.indexOf(strKey[i]);

          if (arr_EN.indexOf(strKey[i]) !== -1) {
            indexKey = arr_EN.indexOf(strKey[i]);
          }

          if (type === "Расшифровать") {
            if (indexText - indexKey < 0) {
              strEncoded += arr_en[indexText + 26 - indexKey];
            } else {
              strEncoded += arr_en[indexText - indexKey];
            }
          } else {
            if (indexText + indexKey < 26) {
              strEncoded += arr_en[indexText + indexKey];
            } else {
              strEncoded += arr_en[indexText + indexKey - 26];
            }
          }
        } else if (arr_EN.indexOf(text[i]) !== -1) {
          let indexText = arr_EN.indexOf(text[i]);
          let indexKey = arr_EN.indexOf(strKey[i]);

          if (arr_en.indexOf(strKey[i]) !== -1) {
            indexKey = arr_en.indexOf(strKey[i]);
          }

          if (type === "Расшифровать") {
            if (indexText - indexKey < 0) {
              strEncoded += arr_EN[indexText + 26 - indexKey];
            } else {
              strEncoded += arr_EN[indexText - indexKey];
            }
          } else {
            if (indexText + indexKey < 26) {
              strEncoded += arr_EN[indexText + indexKey];
            } else {
              strEncoded += arr_EN[indexText + indexKey - 26];
            }
          }
        } else if (arr_ru.indexOf(text[i]) !== -1) {
          let indexText = arr_ru.indexOf(text[i]);
          let indexKey = arr_ru.indexOf(strKey[i]);

          if (arr_RU.indexOf(strKey[i]) !== -1) {
            indexKey = arr_RU.indexOf(strKey[i]);
          }

          if (type === "Расшифровать") {
            if (indexText - indexKey < 0) {
              strEncoded += arr_ru[indexText + 26 - indexKey];
            } else {
              strEncoded += arr_ru[indexText - indexKey];
            }
          } else {
            if (indexText + indexKey < 26) {
              strEncoded += arr_ru[indexText + indexKey];
            } else {
              strEncoded += arr_ru[indexText + indexKey - 26];
            }
          }
        } else if (arr_RU.indexOf(text[i]) !== -1) {
          let indexText = arr_RU.indexOf(text[i]);
          let indexKey = arr_RU.indexOf(strKey[i]);

          if (arr_ru.indexOf(strKey[i]) !== -1) {
            indexKey = arr_ru.indexOf(strKey[i]);
          }

          if (type === "Расшифровать") {
            if (indexText - indexKey < 0) {
              strEncoded += arr_RU[indexText + 26 - indexKey];
            } else {
              strEncoded += arr_RU[indexText - indexKey];
            }
          } else {
            if (indexText + indexKey < 26) {
              strEncoded += arr_RU[indexText + indexKey];
            } else {
              strEncoded += arr_RU[indexText + indexKey - 26];
            }
          }
        }
      }
    }

    return strEncoded;
  },
};

export default vigener;
