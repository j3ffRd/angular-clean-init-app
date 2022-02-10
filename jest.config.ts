module.exports = {
  verbose: true,
  collectCoverage: true,
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  coverageReporters: [
    "html",
    "text",
    "lcov"
  ],
  coveragePathIgnorePatterns: [

  ],  
  coverageThreshold: {
    global: {
        branches: 50, 
        functions: 50, 
        lines: 20, 
        statements: 0 
    }
  },
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  moduleNameMapper: {
    '@bank-app/core': '<rootDir>/../core/src'
  }
};
