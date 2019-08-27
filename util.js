export const joinGenerator = function(mod) {
	const path = require('path');
	return function(...args) {
		const baseDirectory = path.normalize(mod.baseDirectory);
		return path.join.apply(path, [baseDirectory].concat(args));
	}
} 