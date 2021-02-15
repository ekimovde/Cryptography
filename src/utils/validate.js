const validate = {
  validateAtbash: (value, lang) => {
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
  validateScitula: (value) => {
    return value.length !== 0 ? true : false;
  },
};

export default validate;
