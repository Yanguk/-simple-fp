export type Head<T extends any[]>	=
	T extends [infer FirstElement, ...any]
		? FirstElement
		: never;
