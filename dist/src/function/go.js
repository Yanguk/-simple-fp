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
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncGo = exports.go = void 0;
const pipe_1 = require("./pipe");
const go = (target, ...fs) => (0, pipe_1.pipe)(...fs)(target);
exports.go = go;
const asyncGo = (target, ...fs) => __awaiter(void 0, void 0, void 0, function* () { return (0, pipe_1.asyncPipe)(...fs)(target); });
exports.asyncGo = asyncGo;
