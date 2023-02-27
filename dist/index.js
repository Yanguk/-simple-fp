"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maybe = exports.asyncPipe = exports.pipe = exports.asyncGo = exports.go = void 0;
const go_1 = require("./src/function/go");
Object.defineProperty(exports, "go", { enumerable: true, get: function () { return go_1.go; } });
Object.defineProperty(exports, "asyncGo", { enumerable: true, get: function () { return go_1.asyncGo; } });
const pipe_1 = require("./src/function/pipe");
Object.defineProperty(exports, "pipe", { enumerable: true, get: function () { return pipe_1.pipe; } });
Object.defineProperty(exports, "asyncPipe", { enumerable: true, get: function () { return pipe_1.asyncPipe; } });
const Maybe_1 = __importDefault(require("./src/monad/Maybe"));
exports.Maybe = Maybe_1.default;
