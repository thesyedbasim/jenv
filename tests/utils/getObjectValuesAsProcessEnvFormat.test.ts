import { getObjectValuesAsProcessEnvFormat } from '../../src/utils/getObjectValuesAsProcessEnvFormat';

describe('should return correct formatted string, without prefix', () => {
	it('should return correct formatted string with keys as snake case', () => {
		expect(
			getObjectValuesAsProcessEnvFormat({
				first_item: 'hello',
				second_item: 'world'
			})
		).toBe(
			`{\n\tfirst_item: process.env.FIRST_ITEM,\n\tsecond_item: process.env.SECOND_ITEM\n}`
		);
	});

	it('should return correct formatted string with keys as pascal case', () => {
		expect(
			getObjectValuesAsProcessEnvFormat({
				FirstItem: 'hello',
				SecondItem: 'world'
			})
		).toBe(
			`{\n\tFirstItem: process.env.FIRST_ITEM,\n\tSecondItem: process.env.SECOND_ITEM\n}`
		);
	});

	it('should return correct formatted string with keys as camel case', () => {
		expect(
			getObjectValuesAsProcessEnvFormat({
				firstItem: 'hello',
				secondItem: 'world'
			})
		).toBe(
			`{\n\tfirstItem: process.env.FIRST_ITEM,\n\tsecondItem: process.env.SECOND_ITEM\n}`
		);
	});
});

describe('should return correct formatted string, with prefix', () => {
	it('should return correct formatted string with keys as snake case', () => {
		expect(
			getObjectValuesAsProcessEnvFormat(
				{
					first_item: 'hello',
					second_item: 'world'
				},
				'next_public'
			)
		).toBe(
			`{\n\tfirst_item: process.env.NEXT_PUBLIC_FIRST_ITEM,\n\tsecond_item: process.env.NEXT_PUBLIC_SECOND_ITEM\n}`
		);
	});

	it('should return correct formatted string with keys as pascal case', () => {
		expect(
			getObjectValuesAsProcessEnvFormat(
				{
					FirstItem: 'hello',
					SecondItem: 'world'
				},
				'next_public'
			)
		).toBe(
			`{\n\tFirstItem: process.env.NEXT_PUBLIC_FIRST_ITEM,\n\tSecondItem: process.env.NEXT_PUBLIC_SECOND_ITEM\n}`
		);
	});

	it('should return correct formatted string with keys as camel case', () => {
		expect(
			getObjectValuesAsProcessEnvFormat(
				{
					firstItem: 'hello',
					secondItem: 'world'
				},
				'next_public'
			)
		).toBe(
			`{\n\tfirstItem: process.env.NEXT_PUBLIC_FIRST_ITEM,\n\tsecondItem: process.env.NEXT_PUBLIC_SECOND_ITEM\n}`
		);
	});
});
