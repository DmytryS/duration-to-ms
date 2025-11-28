module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: [
    '**/tests/**/*.spec.ts',
  ],
  transformIgnorePatterns: [
    'jest.config.js',
  ],
  setupFilesAfterEnv: [],
  testTimeout: 15000,
  moduleNameMapper: {},
}
  