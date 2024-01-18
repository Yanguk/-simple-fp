export type Tail<T extends any[]>	=
	T extends [any, ...infer RestItems]
		? RestItems
		: never;
