"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var imageModel_1 = require("../models/imageModel");
var typeorm_1 = require("typeorm");
var getImages = function () { return __awaiter(void 0, void 0, void 0, function () {
    var imageRepository, images;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imageRepository = (0, typeorm_1.getRepository)(imageModel_1.Image);
                return [4 /*yield*/, imageRepository.find({})];
            case 1:
                images = _a.sent();
                return [2 /*return*/, images];
        }
    });
}); };
var getOneImage = function (title) { return __awaiter(void 0, void 0, void 0, function () {
    var imageRepository, image;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imageRepository = (0, typeorm_1.getRepository)(imageModel_1.Image);
                return [4 /*yield*/, imageRepository.findOne({ title: title })];
            case 1:
                image = _a.sent();
                if (!image) {
                    throw Error('Image in not available');
                }
                return [2 /*return*/, image];
        }
    });
}); };
var addOneImage = function (image) { return __awaiter(void 0, void 0, void 0, function () {
    var imageRepository, imageTemp, newimages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imageRepository = (0, typeorm_1.getRepository)(imageModel_1.Image);
                imageTemp = new imageModel_1.Image();
                imageTemp.title = image.title;
                imageTemp.imgurl = image.imgurl;
                imageTemp.colorScheme1 = image.colorScheme1;
                imageTemp.colorScheme2 = image.colorScheme2;
                imageTemp.colorScheme3 = image.colorScheme3;
                imageTemp.colorScheme4 = image.colorScheme4;
                imageTemp.colorScheme5 = image.colorScheme5;
                return [4 /*yield*/, imageRepository.save(imageTemp)];
            case 1:
                _a.sent();
                console.log('Image has been saved');
                return [4 /*yield*/, imageRepository.find()];
            case 2:
                newimages = _a.sent();
                if (!newimages) {
                    throw Error('Image in not available');
                }
                return [2 /*return*/, newimages];
        }
    });
}); };
// const updateImage = async (image: ImageType) => {
//   const imageToUpdate = await imageRepository.findOne({ title: image.title });
//   imageToUpdate?.title = image.title;
//   imageToUpdate?.imgurl = image.imgurl;
//   imageToUpdate?.colorScheme1 = image.colorScheme1;
//   imageToUpdate?.colorScheme2 = image.colorScheme2;
//   imageToUpdate?.colorScheme3 = image.colorScheme3;
//   imageToUpdate?.colorScheme4 = image.colorScheme4;
//   imageToUpdate?.colorScheme5 = image.colorScheme5;
//   await imageRepository.save(imageToUpdate);
//   console.log('Image has been updated');
//   const newimages = await imageRepository.find();
//   if (!newimages) {
//     throw Error('Images in not available');
//   }
//   return newimages;
// };
var deleteImage = function (image) { return __awaiter(void 0, void 0, void 0, function () {
    var imageRepository, imageToRemove, newimages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imageRepository = (0, typeorm_1.getRepository)(imageModel_1.Image);
                return [4 /*yield*/, imageRepository.findOne({ title: image.title })];
            case 1:
                imageToRemove = _a.sent();
                if (!imageToRemove) return [3 /*break*/, 3];
                return [4 /*yield*/, imageRepository.remove(imageToRemove)];
            case 2:
                _a.sent();
                console.log('Image has been deleted');
                return [3 /*break*/, 4];
            case 3: throw Error('Image not found');
            case 4: return [4 /*yield*/, imageRepository.find()];
            case 5:
                newimages = _a.sent();
                if (!newimages) {
                    throw Error('Images are not available');
                }
                return [2 /*return*/, newimages];
        }
    });
}); };
exports["default"] = {
    getImages: getImages,
    getOneImage: getOneImage,
    addOneImage: addOneImage,
    deleteImage: deleteImage
};
