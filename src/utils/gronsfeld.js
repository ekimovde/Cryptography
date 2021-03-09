const gronsfeld = {
  encoding: (text, key, type) => {
    const arr_ru = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    const arr_en = "abcdefghijklmnopqrstuvwxyz";
    const arr_RU = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    const arr_EN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let strKey = key;
    let strEncoded = "";

    if (text.length > key.length) {
      while (strKey.length !== text.length) {
        for (let i = 0; i < key.length; i++) {
          if (text.length !== strKey.length) {
            strKey += key[i];
          } else {
            break;
          }
        }
      }
    } else if (text.length < key.length) {
      strKey = strKey.substring(0, key.length - (key.length - text.length));
    }

    console.log("strKey:", strKey);

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
        if (arr_ru.indexOf(text[i]) !== -1) {
          let index = arr_ru.indexOf(text[i]) + parseInt(strKey[i]);

          if (type === "Расшифровать") {
            index = arr_ru.indexOf(text[i]) - parseInt(strKey[i]);
          }

          let len = arr_ru.length;

          if (index < 0) {
            strEncoded += arr_ru[len + index];
          } else {
            strEncoded += arr_ru[index % len];
          }
        } else if (arr_en.indexOf(text[i]) !== -1) {
          let index = arr_en.indexOf(text[i]) + parseInt(strKey[i]);

          if (type === "Расшифровать") {
            index = arr_en.indexOf(text[i]) - parseInt(strKey[i]);
          }

          let len = arr_en.length;

          if (index < 0) {
            strEncoded += arr_en[len + index];
          } else {
            strEncoded += arr_en[index % len];
          }
        } else if (arr_RU.indexOf(text[i]) !== -1) {
          let index = arr_RU.indexOf(text[i]) + parseInt(strKey[i]);

          if (type === "Расшифровать") {
            index = arr_RU.indexOf(text[i]) - parseInt(strKey[i]);
          }

          let len = arr_RU.length;

          if (index < 0) {
            strEncoded += arr_RU[len + index];
          } else {
            strEncoded += arr_RU[index % len];
          }
        } else if (arr_EN.indexOf(text[i]) !== -1) {
          let index = arr_EN.indexOf(text[i]) + parseInt(strKey[i]);

          if (type === "Расшифровать") {
            index = arr_EN.indexOf(text[i]) - parseInt(strKey[i]);
          }

          let len = arr_EN.length;

          if (index < 0) {
            strEncoded += arr_EN[len + index];
          } else {
            strEncoded += arr_EN[index % len];
          }
        }
      }
    }

    console.log("strEncoded:", strEncoded);

    return strEncoded;
  },
};

export default gronsfeld;
