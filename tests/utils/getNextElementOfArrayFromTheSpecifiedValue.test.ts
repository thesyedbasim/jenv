import { getNextElementOfArrayFromTheSpecifiedValue } from '../../src/utils/getNextElementOfArrayFromTheSpecifiedValue';

describe('gets next element correctly', () => {
	const testArray = [
		'hi',
		6,
		'8',
		'hello',
		null,
		'test',
		undefined,
		'num test',
		0,
		'last'
	];

	it('should return next element with search element as string', () => {
		expect(getNextElementOfArrayFromTheSpecifiedValue(testArray, '8')).toEqual({
			value: 'hello',
			noValueReason: undefined
		});
	});

	it('should return next element with search element as number', () => {
		expect(getNextElementOfArrayFromTheSpecifiedValue(testArray, 6)).toEqual({
			value: '8',
			noValueReason: undefined
		});
	});

	it('should return next element with search element as 0', () => {
		expect(getNextElementOfArrayFromTheSpecifiedValue(testArray, 0)).toEqual({
			value: 'last',
			noValueReason: undefined
		});
	});

	it('should return next element with search element as null', () => {
		expect(getNextElementOfArrayFromTheSpecifiedValue(testArray, null)).toEqual(
			{
				value: 'test',
				noValueReason: undefined
			}
		);
	});

	it('should return next element with search element as undefined', () => {
		expect(
			getNextElementOfArrayFromTheSpecifiedValue(testArray, undefined)
		).toEqual({
			value: 'num test',
			noValueReason: undefined
		});
	});

	it('should return next element when next element is 0', () => {
		expect(
			getNextElementOfArrayFromTheSpecifiedValue(testArray, 'num test')
		).toEqual({
			value: 0,
			noValueReason: undefined
		});
	});
});

describe('does not get next element correctly', () => {
	const testArray = [
		'hi',
		6,
		'8',
		'hello',
		null,
		'test',
		undefined,
		'num test',
		0,
		'last'
	];

	it('should return value as null and reason as search element not found', () => {
		expect(
			getNextElementOfArrayFromTheSpecifiedValue(testArray, 'no element')
		).toEqual({
			value: null,
			noValueReason: 'ELEMENT_NOT_FOUND'
		});
	});

	it('should return value as null and reason as next element not found', () => {
		expect(
			getNextElementOfArrayFromTheSpecifiedValue(testArray, 'last')
		).toEqual({
			value: null,
			noValueReason: 'NEXT_ELEMENT_NOT_FOUND'
		});
	});

	it('should return value as null and reason as next element not found with next element as null', () => {
		expect(
			getNextElementOfArrayFromTheSpecifiedValue(testArray, 'hello')
		).toEqual({
			value: null,
			noValueReason: 'NEXT_ELEMENT_NOT_FOUND'
		});
	});

	it('should return value as null and reason as next element not found with next element as undefined', () => {
		expect(
			getNextElementOfArrayFromTheSpecifiedValue(testArray, 'test')
		).toEqual({
			value: null,
			noValueReason: 'NEXT_ELEMENT_NOT_FOUND'
		});
	});
});
