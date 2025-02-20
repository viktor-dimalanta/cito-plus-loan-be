export default {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    moduleDirectories: ['node_modules', 'src'],
    testMatch: ["**/__tests__/**/*.test.ts"],

  };
  