function isPromise(value) {
	if (value !== null && typeof value === 'object') {
		return value.promise && typeof value.promise.then === 'function';
	}
}

export default function promiseMiddleware() {
	return (next) => (action) => {
		const { promise, type, ...rest } = action;
		
		if(!isPromise) {
			return next(action);
		}
		
		next({ ...rest, type: `${type}_LOADING` });
		
		return promise.then(
			(result) => {
				next({ ...rest, result, type: `${type}_SUCCESS` });
		  	},
		  	(error) => {
				next({ ...rest, error, type: `${type}_FAIL` });
			}
		);
	};
}