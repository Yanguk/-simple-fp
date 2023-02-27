"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Maybe {
    constructor() { }
    static wrap(value) {
        if (value == null) {
            return new None();
        }
        return new Some(value);
    }
}
exports.default = Maybe;
class Some {
    constructor(v) {
        this.value = v;
    }
    unwrap() {
        return this.value;
    }
    expect(_err) {
        return this.value;
    }
    isSome() {
        return true;
    }
    map(f) {
        return new Some(f(this.value));
    }
}
class None {
    unwrap() {
        const error = new Error('None.unwrap()');
        error.name = 'MaybeError';
        throw error;
    }
    expect(err) {
        if (err instanceof Error) {
            throw err;
        }
        const newError = new Error(err);
        newError.name = 'MaybeError';
        throw newError;
    }
    isSome() {
        return false;
    }
    map(f) {
        return new None();
    }
}
