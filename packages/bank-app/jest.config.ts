const getJestConfig = require('../../jest.config.ts');

module.exports = {
  ...getJestConfig,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  coveragePathIgnorePatterns: [
    "src/main.ts", 
    "src/polyfills.ts", 
    "src/test.ts", 
    "src/environments/environment.prod.ts"
  ],
  coverageDirectory: "../../coverage/bank-app",
};
