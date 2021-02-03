const validateAtbash = (value, lang) => {
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
};

export default validateAtbash;
