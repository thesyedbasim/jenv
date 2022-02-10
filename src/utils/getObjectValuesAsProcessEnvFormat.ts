import { convertStringToSnakeAndUpperCase } from './convertStringToSnakeAndUpperCase';

export const getObjectValuesAsProcessEnvFormat: (
	obj: Object,
	prefix?: string
) => string = (obj, prefix) => {
	return (
		'{\n' +
		Object.keys(obj)
			.map(
				(key) =>
					`\t${key}: process.env.${convertStringToSnakeAndUpperCase(
						key,
						prefix
					)}`
			)
			.join(',\n') +
		'\n}'
	);
};
