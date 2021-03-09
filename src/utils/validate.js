const validate = {
  validateAtbash: (value, lang) => {
    if (lang === "Русский") {
      if (/^[^a-zA-Z]+$/.test(value)) {
        return true;
      } else {
        return false;
      }
    } else if (lang === "Английский") {
      if (/^[^а-яА-Я]+$/.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  },
  validateScitula: (value) => {
    return value.length !== 0 ? true : false;
  },
  validatePolybiusSquare: (value, lang) => {
    if (lang === "Русский") {
      if (/^[^a-zA-Z0-9]+$/.test(value)) {
        return true;
      } else {
        return false;
      }
    } else if (lang === "Английский") {
      if (/^[^а-яА-Я0-9]+$/.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  },
  validatePolybiusSquareKey: (key) => {
    let map = {};
    for (let i = 0; i < key.length; i++) {
      if (map[key[i]]) {
        return true;
      }
      map[key[i]] = 1;
    }
    return false;
  },
  validateCaesar: (value, lang) => {
    if (lang === "Русский") {
      if (/^[^]+$/.test(value)) {
        return true;
      } else {
        return false;
      }
    } else if (lang === "Английский") {
      if (/^[^]+$/.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  },
  validateGronsfeld: (value) => {
    if (!/^[^А-Яа-яA-Za-z]+$/.test(value)) {
      return true;
    } else {
      return false;
    }
  },
};

export default validate;
