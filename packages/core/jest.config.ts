const getJestConfigCore = require('../../jest.config.ts');

module.exports = {
  ...getJestConfigCore,
  testEnvironment: 'node',
  coverageDirectory: "../../coverage/core",
};
