#!/usr/bin/env node

import { appendFileSync, readFileSync, writeFileSync } from 'fs';
import { convertObjectItemsToSnakeAndUpperCase } from './utils/convertStringToSnakeAndUpperCase';
import { getNextElementOfArrayFromTheSpecifiedValue } from './utils/getNextElementOfArrayFromTheSpecifiedValue';
import { getObjectValuesAsProcessEnvFormat } from './utils/getObjectValuesAsProcessEnvFormat';

type FileData = { [key: string]: string | number };

const getArguments: () => {
	inputFilePath: string;
	outputFilePath: string;
	prefix: string;
	shouldWrite: boolean;
} = () => {
	const [_, _2, inputFilePath, outputFilePath] = process.argv;
	let shouldWrite: boolean = false;

	if (outputFilePath && process.argv.includes('-w')) shouldWrite = true;

	if (!inputFilePath) throw new Error('No input file specified.');
	if (!outputFilePath) throw new Error('Not output file specified.');

	if (!inputFilePath.endsWith('.json'))
		throw new Error(
			'Invalid input file type. This program supports only .json file type.'
		);

	const { value: prefix, noValueReason } =
		getNextElementOfArrayFromTheSpecifiedValue(process.argv, '-p');

	if (noValueReason === 'NEXT_ELEMENT_NOT_FOUND')
		throw new Error('Please specify prefix.');

	return { inputFilePath, outputFilePath, prefix: prefix || '', shouldWrite };
};

const getJSONFileData: (path: string) => FileData = (path) => {
	const fileData = readFileSync(path, 'utf-8');

	return JSON.parse(fileData);
};

const appendDataToEnv: (path: string, data: string) => void = (path, data) => {
	appendFileSync(path, `\n${data}`);
};

const writeDataToEnv: (path: string, data: string) => void = (path, data) => {
	writeFileSync(path, data);
};

const init = async () => {
	const { inputFilePath, outputFilePath, prefix, shouldWrite } = getArguments();

	let fileData;

	try {
		fileData = getJSONFileData(inputFilePath);
	} catch (err) {
		throw new Error('Looks like the specified input file is not present.');
	}

	const formattedDataAsString: string = convertObjectItemsToSnakeAndUpperCase(
		fileData,
		prefix
	);

	try {
		if (shouldWrite) writeDataToEnv(outputFilePath, formattedDataAsString);
		else appendDataToEnv(outputFilePath, formattedDataAsString);
	} catch (err) {
		throw new Error(
			'There was some problem writing/appending to the output file.'
		);
	}

	console.log(
		'********** Copy and paste this value in your JS/TS file if you want! **********'
	);
	console.log(getObjectValuesAsProcessEnvFormat(fileData, prefix));
};

init();

process.on('unhandledRejection', (err) => {
	console.error(err);

	process.exit(1);
});

process.on('uncaughtException', (err) => {
	console.error('Oops! There was some problem on our side.');
	console.error(err);

	process.exit(1);
});
