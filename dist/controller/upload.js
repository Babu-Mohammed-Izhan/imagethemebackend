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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
var axios_1 = __importDefault(require("axios"));
var express_1 = __importDefault(require("express"));
var utils_1 = require("../utils");
var uploadservice_1 = __importDefault(require("../service/uploadservice"));
var router = express_1["default"].Router();
router.get('/', function (_req, res) {
    var newimages = uploadservice_1["default"].getImages();
    newimages
        .then(function (response) {
        res.json(response);
    })["catch"](function (err) {
        console.log(err);
    });
});
router.post('/', function (req, res) {
    var imgurl = (0, utils_1.parseString)(req.body.url);
    var apiKey = 'acc_3e5d16f9e4f3006';
    var apiSecret = '498e6d9f842f3eb8669809adffbff38a';
    var url = 'https://api.imagga.com/v2/colors?image_url=' + encodeURIComponent(imgurl);
    void (function () { return __awaiter(void 0, void 0, void 0, function () {
        var imgres, data, colormind, newImages, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            auth: { username: apiKey, password: apiSecret }
                        })];
                case 1:
                    imgres = _a.sent();
                    data = imgres.data.result.colors;
                    return [4 /*yield*/, axios_1["default"].post('http://colormind.io/api/', {
                            model: 'default',
                            input: [
                                [
                                    data.background_colors[0].r,
                                    data.background_colors[0].g,
                                    data.background_colors[0].b,
                                ],
                                [
                                    data.foreground_colors[0].r,
                                    data.foreground_colors[0].g,
                                    data.foreground_colors[0].b,
                                ],
                                [
                                    data.image_colors[0].r,
                                    data.image_colors[0].g,
                                    data.image_colors[0].b,
                                ],
                                'N',
                                'N',
                            ]
                        })];
                case 2:
                    colormind = _a.sent();
                    if (!(colormind.status == 200)) return [3 /*break*/, 4];
                    return [4 /*yield*/, uploadservice_1["default"].addOneImage({
                            title: req.body.title,
                            imgurl: imgurl,
                            colorScheme1: "rgb(".concat(colormind.data.result[0], ")"),
                            colorScheme2: "rgb(".concat(colormind.data.result[1], ")"),
                            colorScheme3: "rgb(".concat(colormind.data.result[2], ")"),
                            colorScheme4: "rgb(".concat(colormind.data.result[3], ")"),
                            colorScheme5: "rgb(".concat(colormind.data.result[4], ")")
                        })];
                case 3:
                    newImages = _a.sent();
                    res.json(newImages);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    res.send(Error(error_1.message));
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); })();
});
exports["default"] = router;
