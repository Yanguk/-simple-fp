export type HasTail<T extends any[]> =
	T extends ([] | [any])
		? false
		: true
