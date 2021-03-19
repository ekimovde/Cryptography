const splitTextToBlocks = (txt, len) => {
  const pattern = new RegExp(".{1," + len + "}", "g");
  return txt.match(pattern);
};

export default splitTextToBlocks;
