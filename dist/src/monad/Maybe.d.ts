interface Option<T> {
    unwrap(): T;
    expect(err: string | Error): T;
    isSome(): boolean;
    map<U>(f: (a: T) => U): Option<U>;
}
export default class Maybe {
    private constructor();
    static wrap<T>(value: T): Option<NonNullable<T>>;
}
export {};
