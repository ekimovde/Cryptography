const richelieu = {
  encoded: (text, key) => {
    let blockKey = key.split(" ");
    let blockStr = "";
    let arrayText = [];
    let strEncoded = "";

    if (key.replace(/\s/g, "").length > text.length) {
      return "Длина ключа не может быть больше текста!";
    }

    console.log("blockKey:", blockKey);

    for (let i = 0; i < blockKey.length; i++) {
      let len = blockKey[i].length;

      for (let j = 0; j < len; j++) {
        if (blockKey[i].indexOf(j + 1) === -1) {
          return "Некоректный ключ!";
        }
      }

      for (let index in blockKey[i]) {
        let text = blockKey[i][index].split("");

        if (
          text.some((v, i, a) => {
            return a.lastIndexOf(v) !== i;
          })
        ) {
          return "Некоректный ключ!";
        }
      }
    }

    let start = 0;

    for (let i = 0; i < blockKey.length; i++) {
      blockStr = text.substr(start, blockKey[i].length);
      start += blockKey[i].length;
      arrayText.push(blockStr);
    }

    if (arrayText.join("").length < text.length) {
      let index = text.length - arrayText.join("").length;
      arrayText.push(text.substr(text.length - index, text.length));
    }

    console.log("blockStr:", arrayText);

    blockKey.map((item, index) => {
      let tmp = item.split("");

      return tmp.map((element) => {
        let symbol = arrayText[index].split("").splice(element - 1, 1);
        strEncoded += symbol;

        return element;
      });
    });

    if (strEncoded.length < text.length) {
      let index = text.length - strEncoded.length;
      strEncoded += text.substr(text.length - index, text.length);
    }

    return strEncoded;
  },
  decoded: (text, key) => {
    let blockKey = key.split(" ");
    let blockStr = "";
    let arrayText = [];
    let strDecoded = "";

    if (key.replace(/\s/g, "").length > text.length) {
      return "Длина ключа не может быть больше текста!";
    }

    console.log("blockKey:", blockKey);

    for (let i = 0; i < blockKey.length; i++) {
      let len = blockKey[i].length;

      for (let j = 0; j < len; j++) {
        if (blockKey[i].indexOf(j + 1) === -1) {
          return "Некоректный ключ!";
        }
      }

      for (let index in blockKey[i]) {
        let text = blockKey[i][index].split("");

        if (
          text.some((v, i, a) => {
            return a.lastIndexOf(v) !== i;
          })
        ) {
          return "Некоректный ключ!";
        }
      }
    }

    let start = 0;

    for (let i = 0; i < blockKey.length; i++) {
      blockStr = text.substr(start, blockKey[i].length);
      start += blockKey[i].length;
      arrayText.push(blockStr);
    }

    if (arrayText.join("").length < text.length) {
      let index = text.length - arrayText.join("").length;
      arrayText.push(text.substr(text.length - index, text.length));
    }

    console.log("blockStr:", arrayText);

    blockKey.map((item, index) => {
      let tmp = item.split("");

      return tmp.map((element) => {
        let symbol = arrayText[index].split("").splice(element - 1, 1);
        strDecoded += symbol;

        return element;
      });
    });

    if (strDecoded.length < text.length) {
      let index = text.length - strDecoded.length;
      strDecoded += text.substr(text.length - index, text.length);
    }

    return strDecoded;
  },
};

export default richelieu;
