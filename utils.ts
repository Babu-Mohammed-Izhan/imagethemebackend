const isNumber = (num: unknown): num is number => {
  return typeof num === 'number';
};
const isString = (text: unknown): text is string => {
  return typeof text === 'string';
};

const parseNumber = (num: unknown): number => {
  if (!num || !isNumber(num)) {
    throw new Error('Incorrect or missing number input');
  }

  return num;
};

const parseString = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error('Incorrect or missing string input');
  }

  return comment;
};

const componentToHex = (c: number) => {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

const rgbToHex = (r: number, g: number, b: number) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export { parseString, parseNumber, rgbToHex };
