const richelieu = {
  encoded: (text, key) => {
    let blockKey = key.split(" ");
    let strEncoded = "";
    let blockStr = "";
    let arrayText = [];
    let start = 0;

    console.log(blockKey);

    for (let i = 0; i < blockKey.length; i++) {
      for (let j = 0; j < blockKey[i].split(",").length; j++) {
        if (blockKey[i].indexOf(j + 1) === -1) {
          return "Некоректный ключ!";
        }
      }
    }

    if (key.replace(" ", ",").split(",").length > text.length) {
      return "Длина ключа не может быть больше текста!";
    }

    for (let i = 0; i < blockKey.length; i++) {
      blockKey[i] = blockKey[i].split(",");
      blockStr = text.substr(start, blockKey[i].length);
      start += blockKey[i].length;
      arrayText.push(blockStr);
    }

    if (arrayText.join("").length < text.length) {
      let index = text.length - arrayText.join("").length;
      arrayText.push(text.substr(text.length - index, text.length));
    }

    console.log("arrayText:", arrayText);

    // eslint-disable-next-line
    blockKey.map((item, index) => {
      let tmp = item;
      let copyArr = [...arrayText[index]];

      // eslint-disable-next-line
      tmp.map((element, id) => {
        let tmp = arrayText[index].split("");
        copyArr[element - 1] = tmp[id];
      });

      strEncoded += copyArr.join("");
    });

    if (strEncoded.length < text.length) {
      let index = text.length - strEncoded.length;
      strEncoded += text.substr(text.length - index, text.length);
    }

    return strEncoded;
  },
  decoded: (text, key) => {
    let blockKey = key.split(" ");
    let strDecoded = "";
    let blockStr = "";
    let arrayText = [];
    let start = 0;

    console.log(blockKey);

    for (let i = 0; i < blockKey.length; i++) {
      for (let j = 0; j < blockKey[i].split(",").length; j++) {
        if (blockKey[i].indexOf(j + 1) === -1) {
          return "Некоректный ключ!";
        }
      }
    }

    if (key.replace(" ", ",").split(",").length > text.length) {
      return "Длина ключа не может быть больше текста!";
    }

    for (let i = 0; i < blockKey.length; i++) {
      blockKey[i] = blockKey[i].split(",");
      blockStr = text.substr(start, blockKey[i].length);
      start += blockKey[i].length;
      arrayText.push(blockStr);
    }

    if (arrayText.join("").length < text.length) {
      let index = text.length - arrayText.join("").length;
      arrayText.push(text.substr(text.length - index, text.length));
    }

    console.log("arrayText:", arrayText);

    // eslint-disable-next-line
    blockKey.map((item, index) => {
      let tmp = item;
      let copyArr = [...arrayText[index]];

      // eslint-disable-next-line
      tmp.map((element, id) => {
        let tmp = arrayText[index].split("");
        copyArr[element - 1] = tmp[id];
      });

      strDecoded += copyArr.join("");
    });

    if (strDecoded.length < text.length) {
      let index = text.length - strDecoded.length;
      strDecoded += text.substr(text.length - index, text.length);
    }

    return strDecoded;
  },
};

export default richelieu;
