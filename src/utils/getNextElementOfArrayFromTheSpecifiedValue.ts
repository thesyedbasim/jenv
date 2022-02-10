export const getNextElementOfArrayFromTheSpecifiedValue: (
	array: any[],
	value: any
) => {
	value: any;
	noValueReason?: 'ELEMENT_NOT_FOUND' | 'NEXT_ELEMENT_NOT_FOUND';
} = (array, valueToSearch) => {
	const indexOfSpecifiedValue = array.indexOf(valueToSearch);

	if (indexOfSpecifiedValue < 0)
		return { value: null, noValueReason: 'ELEMENT_NOT_FOUND' };

	return array[indexOfSpecifiedValue + 1] !== undefined &&
		array[indexOfSpecifiedValue + 1] !== null
		? { value: array[indexOfSpecifiedValue + 1] }
		: { value: null, noValueReason: 'NEXT_ELEMENT_NOT_FOUND' };
};
