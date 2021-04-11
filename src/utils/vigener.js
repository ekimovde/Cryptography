const arr_ru = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const arr_en = "abcdefghijklmnopqrstuvwxyz";
const arr_RU = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const arr_EN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const vigener = {
  encoding: (text, key) => {
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
          let indexText = parseInt(arr_en.indexOf(text[i]));
          let indexKey = parseInt(arr_en.indexOf(strKey[i]));

          let index = (indexText + indexKey) % arr_en.length;

          strEncoded += arr_en[index];
        } else if (arr_EN.indexOf(text[i]) !== -1) {
          let indexText = parseInt(arr_EN.indexOf(text[i]));
          let indexKey = parseInt(arr_EN.indexOf(strKey[i]));

          let index = (indexText + indexKey) % arr_EN.length;

          strEncoded += arr_EN[index];
        } else if (arr_ru.indexOf(text[i]) !== -1) {
          let indexText = parseInt(arr_ru.indexOf(text[i]));
          let indexKey = parseInt(arr_ru.indexOf(strKey[i]));

          let index = (indexText + indexKey) % arr_ru.length;

          strEncoded += arr_ru[index];
        } else if (arr_RU.indexOf(text[i]) !== -1) {
          let indexText = parseInt(arr_RU.indexOf(text[i]));
          let indexKey = parseInt(arr_RU.indexOf(strKey[i]));

          let index = (indexText + indexKey) % arr_RU.length;

          strEncoded += arr_RU[index];
        }
      }
    }

    return strEncoded;
  },
  decoding: (text, key) => {
    let strKey = key;
    let strDecoded = "";

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
        strDecoded += " ";
      } else if (text[i] === ",") {
        strDecoded += ",";
      } else if (text[i] === ".") {
        strDecoded += ".";
      } else if (/^\d+$/.test(+text[i])) {
        strDecoded += text[i];
      } else {
        if (arr_en.indexOf(text[i]) !== -1) {
          let indexText = parseInt(arr_en.indexOf(text[i]));
          let indexKey = parseInt(arr_en.indexOf(strKey[i]));

          let index = (indexText - indexKey) % arr_en.length;

          if (index > 0) {
            strDecoded += arr_en[index];
          } else {
            index = arr_en.length - Math.abs(index);
            strDecoded += arr_en[index];
          }
        } else if (arr_EN.indexOf(text[i]) !== -1) {
          let indexText = parseInt(arr_EN.indexOf(text[i]));
          let indexKey = parseInt(arr_EN.indexOf(strKey[i]));

          let index = (indexText - indexKey) % arr_EN.length;

          if (index > 0) {
            strDecoded += arr_EN[index];
          } else {
            index = arr_EN.length - Math.abs(index);
            strDecoded += arr_EN[index];
          }
        } else if (arr_ru.indexOf(text[i]) !== -1) {
          let indexText = parseInt(arr_ru.indexOf(text[i]));
          let indexKey = parseInt(arr_ru.indexOf(strKey[i]));

          let index = (indexText - indexKey) % arr_ru.length;

          if (index > 0) {
            strDecoded += arr_ru[index];
          } else {
            index = arr_ru.length - Math.abs(index);
            strDecoded += arr_ru[index];
          }
        } else if (arr_RU.indexOf(text[i]) !== -1) {
          let indexText = parseInt(arr_RU.indexOf(text[i]));
          let indexKey = parseInt(arr_RU.indexOf(strKey[i]));

          let index = (indexText - indexKey) % arr_RU.length;

          if (index > 0) {
            strDecoded += arr_RU[index];
          } else {
            index = arr_RU.length - Math.abs(index);
            strDecoded += arr_RU[index];
          }
        }
      }
    }

    return strDecoded;
  },
};

export default vigener;
