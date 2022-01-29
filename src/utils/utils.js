const colourToHex = (colour) => {
  const hex = colour.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return `#${colourToHex(r)}${colourToHex(g)}${colourToHex(b)}}`;
};

export default rgbToHex;
