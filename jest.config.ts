import type { Config } from '@jest/types';

export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	modulePathIgnorePatterns: ['<rootDir>/dist/']
} as Config.InitialOptions;
