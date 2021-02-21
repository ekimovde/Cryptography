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
};

export default validate;
