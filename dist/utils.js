"use strict";
exports.__esModule = true;
exports.parseNumber = exports.parseString = void 0;
var isNumber = function (num) {
    return typeof num === "number";
};
var isString = function (text) {
    return typeof text === "string";
};
var parseNumber = function (num) {
    if (!num || !isNumber(num)) {
        throw new Error("Incorrect or missing number input");
    }
    return num;
};
exports.parseNumber = parseNumber;
var parseString = function (comment) {
    if (!comment || !isString(comment)) {
        throw new Error("Incorrect or missing string input");
    }
    return comment;
};
exports.parseString = parseString;
