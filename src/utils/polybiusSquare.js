const polybiusSquare = {
  createAlphabet: (key, lang) => {
    let alphStr = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

    // eslint-disable-next-line
    String.prototype.replaceAt = function (index, replacement) {
      return (
        this.substr(0, index) +
        replacement +
        this.substr(index + replacement.length)
      );
    };

    if (lang === "Английский") {
      if (key.indexOf("J") !== -1) {
        let index = key.indexOf("J");
        key.replaceAt(index, "J");
      }
    }

    if (lang === "Русский") {
      alphStr = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    }

    for (let i = 0; i < key.length; i++) {
      alphStr = alphStr.replace(key[i], "");
    }

    let newAlphStr = key.concat(alphStr);
    let arrAlph = [];
    let count = 0;

    if (lang === "Английский") {
      for (let i = 0; i < 5; i++) {
        arrAlph[i] = [];
        for (let j = 0; j < 5; j++) {
          arrAlph[i][j] = newAlphStr[count];
          count++;
        }
      }
    } else {
      for (let i = 0; i < 6; i++) {
        arrAlph[i] = [];
        for (let j = 0; j < 6; j++) {
          if (newAlphStr[count]) {
            arrAlph[i][j] = newAlphStr[count];
            count++;
          } else {
            arrAlph[i][j] = "";
            count++;
          }
        }
      }
    }

    console.log("arrAlph", arrAlph);

    return arrAlph;
  },
  encoded: (alph, arrValues, lang) => {
    let arr = [];

    if (lang === "Английский") {
      for (let k = 0; k < arrValues.length; k++) {
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            if (arrValues[k] === alph[i][j]) {
              let index1 = i + 1;
              let index2 = j + 1;
              let str = index1 + "" + index2;
              arr.push(str);
            }
          }
        }
      }
    } else {
      for (let k = 0; k < arrValues.length; k++) {
        for (let i = 0; i < 6; i++) {
          for (let j = 0; j < 6; j++) {
            if (arrValues[k] === alph[i][j]) {
              let index1 = i + 1;
              let index2 = j + 1;
              let str = index1 + "" + index2;
              arr.push(str);
            }
          }
        }
      }
    }

    console.log("Индексы символов:", arr);

    let count = 0;
    let string = "";

    while (count <= 1) {
      for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
          string += arr[i][1];
        } else if (count === 1) {
          string += arr[i][0];
        }
      }
      count++;
    }

    let newStrIndex = string.match(/.{1,2}/g);

    console.log("Преобразованные индексы:", newStrIndex);

    let encodedTexts = "";

    for (let i = 0; i < newStrIndex.length; i++) {
      let tmp = newStrIndex[i];
      encodedTexts += alph[tmp[1] - 1][tmp[0] - 1];
    }

    return encodedTexts;
  },
  decoded: (alph, encodedTexts, lang) => {
    let arr = "";

    if (lang === "Английский") {
      for (let k = 0; k < encodedTexts.length; k++) {
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            if (encodedTexts[k] === alph[i][j]) {
              let index1 = i + 1;
              let index2 = j + 1;
              let str = index2 + "" + index1;
              arr += str;
            }
          }
        }
      }
    } else {
      for (let k = 0; k < encodedTexts.length; k++) {
        for (let i = 0; i < 6; i++) {
          for (let j = 0; j < 6; j++) {
            if (encodedTexts[k] === alph[i][j]) {
              let index1 = i + 1;
              let index2 = j + 1;
              let str = index2 + "" + index1;
              arr += str;
            }
          }
        }
      }
    }

    console.log("Индексы:", arr);

    let arr1 = arr.substring(0, arr.length / 2);
    let arr2 = arr.substring(arr.length / 2);

    let decodedString = "";

    for (let i = 0; i < arr1.length; i++) {
      decodedString += alph[arr2[i] - 1][arr1[i] - 1];
    }

    return decodedString;
  },
};

export default polybiusSquare;
