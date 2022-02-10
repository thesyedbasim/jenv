import snakeCase from 'lodash/snakeCase';

export const convertStringToSnakeAndUpperCase: (
	value: string,
	prefix?: string
) => string = (value, prefix = '') => {
	return prefix.trim() !== ''
		? `${snakeCase(prefix).toUpperCase()}_${snakeCase(value).toUpperCase()}`
		: snakeCase(value).toUpperCase();
};

export const convertObjectItemsToSnakeAndUpperCase: (
	obj: Object,
	prefix?: string
) => string = (obj, prefix) => {
	return Object.entries(obj)
		.map(([key, value]) =>
			typeof value === 'number'
				? `${convertStringToSnakeAndUpperCase(key, prefix)}=${value}`
				: `${convertStringToSnakeAndUpperCase(key, prefix)}="${value}"`
		)
		.join('\n');
};
