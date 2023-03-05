const inspect = <T>(f: (v: T) => void, target: T): T => (f(target), target);

export default inspect;
