const isNumber = (num: unknown): num is number => {
  return typeof num === "number";
};
const isString = (text: unknown): text is string => {
  return typeof text === "string";
};

const parseNumber = (num: unknown): number => {
  if (!num || !isNumber(num)) {
    throw new Error("Incorrect or missing number input");
  }

  return num;
};

const parseString = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing string input");
  }

  return comment;
};

export { parseString, parseNumber };
