/**
 *
 * @param {Object} obj
 * @param {String} keysToOmit
 */
export function omit(obj, ...keysToOmit) {
	return Object.keys(obj).reduce((acc, key) => {
		if (keysToOmit.indexOf(key) === -1) acc[key] = obj[key];
		return acc;
	}, {});
}

/**
 *
 * @param {Function} fn
 * @param {Number|undefined} wait
 */
export function debounce(fn, wait) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn.apply(this, args);
		}, wait);
	};
}

/**
 *
 * @param {Object[]} arr
 * @param {String} search
 */
export function filterBySearchTerm(arr, search) {
	return arr.filter((val) => val.name.toLowerCase().includes(search));
}
