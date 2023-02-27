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
exports.asyncPipe = exports.pipe = void 0;
const pipe = (...fs) => (...args) => {
    const iter = fs[Symbol.iterator]();
    let cur = iter.next();
    let acc = cur.value(...args);
    while (!(cur = iter.next()).done) {
        acc = cur.value(acc);
    }
    return acc;
};
exports.pipe = pipe;
const asyncPipe = (...fs) => (...args) => __awaiter(void 0, void 0, void 0, function* () {
    const iter = fs[Symbol.iterator]();
    let cur = iter.next();
    let target = yield Promise.all(args);
    let acc = yield cur.value(...target);
    while (!(cur = iter.next()).done) {
        acc = yield cur.value(acc);
    }
    return acc;
});
exports.asyncPipe = asyncPipe;
