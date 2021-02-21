const polybiusSquare = {
  createAlphabet: (text, key, lang) => {
    let alphStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // if (lang === "Английский") {
    //   if (key.indexOf("I") !== -1 || text.indexOf("I") !== -1) {
    //     alphStr = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    //     console.log(key.indexOf("I"));
    //   } else if (key.indexOf("J") !== -1 || text.indexOf("J") !== -1) {
    //     alphStr = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
    //     console.log(key.indexOf("J"));
    //   }
    // }

    if (lang === "Русский") {
      alphStr = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЫЬЭЮЯ";
    }

    for (let i = 0; i < key.length; i++) {
      alphStr = alphStr.replace(key[i], "");
    }

    let newAlphStr = key.concat(alphStr);
    let arrAlph = [];
    let count = 0;

    for (let i = 0; i < 5; i++) {
      arrAlph[i] = [];
      for (let j = 0; j < 5; j++) {
        arrAlph[i][j] = newAlphStr[count];
        count++;
      }
    }

    console.log("arrAlph", arrAlph);

    return arrAlph;
  },
  encoded: (alph, arrValues) => {
    let arr = [];

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
  decoded: (alph, encodedTexts) => {
    let arr = [];

    for (let k = 0; k < encodedTexts.length; k++) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (encodedTexts[k] === alph[i][j]) {
            let index1 = i + 1;
            let index2 = j + 1;
            let str = index2 + "" + index1;
            arr.push(str);
          }
        }
      }
    }

    console.log(arr);

    let lenArr = arr.length / 2;
    let arr1 = arr.slice(0, lenArr);
    let arr2 = arr.slice(lenArr, arr.length);

    let string1 = "";
    let string2 = "";

    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
      let tmp1 = arr1[i];
      let tmp2 = arr2[i];

      string1 = tmp1[0] + tmp2[0];
      string2 = tmp1[1] + tmp2[1];

      newArr.push(string1);
      newArr.push(string2);
    }

    console.log(newArr);

    let decodedString = "";

    for (let i = 0; i < newArr.length; i++) {
      let index = newArr[i];
      decodedString += alph[index[1] - 1][index[0] - 1];
    }

    console.log("Расшифрованная строка:", decodedString);

    return decodedString;
  },
};

export default polybiusSquare;
