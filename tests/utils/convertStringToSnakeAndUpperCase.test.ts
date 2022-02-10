import {
	convertStringToSnakeAndUpperCase,
	convertObjectItemsToSnakeAndUpperCase
} from '../../src/utils/convertStringToSnakeAndUpperCase';

describe('gets correctly formatted string without prefix', () => {
	it('should return correctly formatted string with snake case arg', () => {
		expect(convertStringToSnakeAndUpperCase('next_public')).toBe('NEXT_PUBLIC');
	});

	it('should return correctly formatted string with kebab case arg', () => {
		expect(convertStringToSnakeAndUpperCase('next-public')).toBe('NEXT_PUBLIC');
	});

	it('should return correctly formatted string with camel case arg', () => {
		expect(convertStringToSnakeAndUpperCase('nextPublic')).toBe('NEXT_PUBLIC');
	});

	it('should return correctly formatted string with pascal case arg', () => {
		expect(convertStringToSnakeAndUpperCase('NextPublic')).toBe('NEXT_PUBLIC');
	});
});

describe('gets correctly formatted string with prefix', () => {
	it('should return correctly formatted string with snake case arg', () => {
		expect(convertStringToSnakeAndUpperCase('next_public', 'env')).toBe(
			'ENV_NEXT_PUBLIC'
		);
	});

	it('should return correctly formatted string with kebab case arg', () => {
		expect(convertStringToSnakeAndUpperCase('next-public', 'env')).toBe(
			'ENV_NEXT_PUBLIC'
		);
	});

	it('should return correctly formatted string with camel case arg', () => {
		expect(convertStringToSnakeAndUpperCase('nextPublic', 'env')).toBe(
			'ENV_NEXT_PUBLIC'
		);
	});

	it('should return correctly formatted string with pascal case arg', () => {
		expect(convertStringToSnakeAndUpperCase('NextPublic', 'env')).toBe(
			'ENV_NEXT_PUBLIC'
		);
	});
});

describe('convert object items to snake and upper case as string correctly', () => {
	it('should return string in correct format single word', () => {
		expect(
			convertObjectItemsToSnakeAndUpperCase({ hello: 'hi', world: 'universe' })
		).toBe(`HELLO="hi"\nWORLD="universe"`);
	});

	it('should return string in correct format camel case', () => {
		expect(
			convertObjectItemsToSnakeAndUpperCase({
				helloFirst: 'hi',
				worldSecond: 'universe'
			})
		).toBe(`HELLO_FIRST="hi"\nWORLD_SECOND="universe"`);
	});

	it('should return string in correct format camel case', () => {
		expect(
			convertObjectItemsToSnakeAndUpperCase({
				HelloFirst: 'hi',
				WorldSecond: 'universe'
			})
		).toBe(`HELLO_FIRST="hi"\nWORLD_SECOND="universe"`);
	});

	it('should return string in correct format with prefix', () => {
		expect(
			convertObjectItemsToSnakeAndUpperCase(
				{ HelloFirst: 'hi', WorldSecond: 'universe' },
				'public'
			)
		).toBe(`PUBLIC_HELLO_FIRST="hi"\nPUBLIC_WORLD_SECOND="universe"`);
	});

	it('should return string in correct format with prefix snake case', () => {
		expect(
			convertObjectItemsToSnakeAndUpperCase(
				{ HelloFirst: 'hi', WorldSecond: 'universe' },
				'public_env'
			)
		).toBe(`PUBLIC_ENV_HELLO_FIRST="hi"\nPUBLIC_ENV_WORLD_SECOND="universe"`);
	});

	it('should return string in correct format with prefix camel case', () => {
		expect(
			convertObjectItemsToSnakeAndUpperCase(
				{ HelloFirst: 'hi', WorldSecond: 'universe' },
				'publicEnv'
			)
		).toBe(`PUBLIC_ENV_HELLO_FIRST="hi"\nPUBLIC_ENV_WORLD_SECOND="universe"`);
	});

	it('should return string in correct format with value as number', () => {
		expect(
			convertObjectItemsToSnakeAndUpperCase(
				{ HelloFirst: 'hi', WorldSecond: 9 },
				'publicEnv'
			)
		).toBe(`PUBLIC_ENV_HELLO_FIRST="hi"\nPUBLIC_ENV_WORLD_SECOND=9`);
	});
});
