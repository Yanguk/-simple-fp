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
const go_1 = require("./go");
const add5 = (a) => a + 5;
const multi = (a) => a * a;
it('go test', () => {
    const target = 20;
    const assert = (a) => expect(a).toBe(25 * 25);
    (0, go_1.go)(target, add5, multi, assert);
});
it('asyncGo test', () => __awaiter(void 0, void 0, void 0, function* () {
    const target = Promise.resolve(10);
    const assert = (a) => expect(a).toBe(15 * 15);
    yield (0, go_1.asyncGo)(target, add5, multi, assert);
}));
