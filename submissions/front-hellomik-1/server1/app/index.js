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
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var port = 8082;
var router = express.Router();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var db;
        var _this = this;
        return __generator(this, function (_a) {
            app.use(bodyParser.json());
            app.use(cors());
            app.listen(port, function () { return console.log("Server started on port " + port); });
            db = [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "et porro tempora",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 5,
                    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 6,
                    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 7,
                    "title": "illo expedita consequatur quia in",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 8,
                    "title": "quo adipisci enim quam ut ab",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 9,
                    "title": "molestiae perspiciatis ipsa",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 10,
                    "title": "illo est ratione doloremque quia maiores aut",
                    "completed": true
                }
            ];
            router.get('/all', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    res.status(200).send(db.slice(0, 3));
                    return [2 /*return*/];
                });
            }); });
            router.get('/pag', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var yer, sendTo;
                return __generator(this, function (_a) {
                    console.log(req.query);
                    console.log(req.query._page);
                    yer = parseInt(req.query._page) + parseInt(req.query._limit);
                    sendTo = db.slice(req.query._page, yer);
                    res.status(200).send(sendTo);
                    return [2 /*return*/];
                });
            }); });
            app.use('/', router);
            return [2 /*return*/];
        });
    });
}
main();
