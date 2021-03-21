const alphStr = "abcdefghijklmnopqrstuvwxyz";

const disk = {
  encoding: (text, keyValueAlph, keyValueText) => {
    let newAlph = "";
    let str = "";
    let array = [];
    text = text.replace(/\s/g, "");

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

    console.log("newAlph:", newAlph);

    for (let i = 0; i < keyValueText.length; i++) {
      let index = alphStr.indexOf(keyValueText[i]);
      array.push(index);
    }

    for (let i = 0; i < text.length; i++) {
      let index = alphStr.indexOf(text[i]);
      let indexArr = array[i % array.length];
      let charIndex = index - indexArr;

      charIndex = charIndex < 0 ? charIndex + newAlph.length : charIndex;
      str += newAlph[charIndex % newAlph.length];
    }

    return str;
  },
  decoding: (text, keyValueAlph, keyValueText) => {
    let newAlph = "";
    let str = "";
    let array = [];
    text = text.replace(/\s/g, "");

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

    console.log("newAlph:", newAlph);

    for (let i = 0; i < keyValueText.length; i++) {
      let index = alphStr.indexOf(keyValueText[i]);
      array.push(index);
    }

    for (let i = 0; i < text.length; i++) {
      let index = newAlph.indexOf(text[i]);
      let indexArr = array[i % array.length];
      let charIndex = index + indexArr;

      str += alphStr[charIndex % alphStr.length];
    }

    return str;
  },
};

export default disk;
