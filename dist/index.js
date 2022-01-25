"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config({ path: __dirname + '/.env' });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var upload_1 = __importDefault(require("./controller/upload"));
var typeorm_1 = require("typeorm");
var imageModel_1 = require("./models/imageModel");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
(0, typeorm_1.createConnection)({
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'izhan',
    database: process.env.POSTGRES_DB || 'postgres',
    entities: [imageModel_1.Image],
    synchronize: true
})
    .then(function (_conn) {
    console.log('Database Running');
})["catch"](function (err) {
    console.log(err);
});
var PORT = 3001;
app.use('/api/upload', upload_1["default"]);
app.get('/api/ping', function (_req, res) {
    res.send('pong');
});
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
