let alphStr = "abcdefghijklmnopqrstuvwxyz";

const disk = {
  setCheckKey(text, key) {
    if (key.length < text.length) {
      while (key.length < text.length) {
        key = key + key;
      }
    }

    if (key.length > text.length) {
      let newKey = key;
      const countSymbol = key.length - text.length;

      key = newKey.substring(0, newKey.length - countSymbol);
    }

    return key;
  },
  encoding: (text, keyValueAlph, keyValueText, lang) => {
    let newAlph = "";
    let strKey = "";
    let array = [];
    let encodedStr = "";

    text = text.replace(/\s/g, "");

    if (lang === "Русский") {
      alphStr = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    }

    for (let i = 0; i < keyValueAlph.length; i++) {
      if (!newAlph.includes(keyValueAlph[i])) {
        newAlph += keyValueAlph[i];
      }
    }

    for (let i = 0; i < alphStr.length; i++) {
      if (!newAlph.includes(alphStr[i])) {
        newAlph += alphStr[i];
      }
    }

    console.log("newAlph", newAlph);

    strKey = disk.setCheckKey(text, keyValueText);

    console.log("strKey:", strKey);

    for (let i = 0; i < alphStr.length; i++) {
      let positionStart = newAlph.length - i;
      let subStr = newAlph.slice(positionStart);
      let string = subStr + newAlph.replace(subStr, "");

      array.push(string);
    }

    console.log("array:", array);

    for (let i = 0; i < text.length; i++) {
      let indexText = alphStr.indexOf(text[i]);
      let indexKey = alphStr.indexOf(strKey[i]);
      let tmp = array[indexKey];

      encodedStr += tmp[indexText];
    }

    console.log("encodedStr:", encodedStr);
    console.log("\n");

    return encodedStr;
  },

  decoding: (text, keyValueAlph, keyValueText, lang) => {
    let newAlph = "";
    let strKey = "";
    let array = [];
    let decodedStr = "";

    text = text.replace(/\s/g, "");

    if (lang === "Русский") {
      alphStr = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    }

    for (let i = 0; i < keyValueAlph.length; i++) {
      if (!newAlph.includes(keyValueAlph[i])) {
        newAlph += keyValueAlph[i];
      }
    }

    for (let i = 0; i < alphStr.length; i++) {
      if (!newAlph.includes(alphStr[i])) {
        newAlph += alphStr[i];
      }
    }

    console.log("newAlph", newAlph);

    strKey = disk.setCheckKey(text, keyValueText);

    console.log("strKey:", strKey);

    for (let i = 0; i < alphStr.length; i++) {
      let positionStart = newAlph.length - i;
      let subStr = newAlph.slice(positionStart);
      let string = subStr + newAlph.replace(subStr, "");

      array.push(string);
    }

    console.log("array:", array);

    for (let i = 0; i < text.length; i++) {
      let indexKey = alphStr.indexOf(strKey[i]);
      let tmp = array[indexKey];
      let indexText = tmp.indexOf(text[i]);

      decodedStr += alphStr[indexText];
    }

    console.log("decodedStr:", decodedStr);

    return decodedStr;
  },
};

export default disk;
