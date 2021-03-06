module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  coveragePathIgnorePatterns: ["node_modules", "dist", "src/index.tsx"],
  modulePaths: ["<rootDir>"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/file-mock.ts",
    "\\.(css|scss|sass|less)$": "identity-obj-proxy",
  },
  coverageDirectory: "<rootDir>/coverage",
};
