const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^sections/(.*)$': '<rootDir>/sections/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  // Rely on next/jest default SWC transform (no Babel)
};

module.exports = createJestConfig(customJestConfig);
