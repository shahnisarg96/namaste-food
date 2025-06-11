module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    // Runs *before* Jest globals exist
    setupFiles: ["./jest.setup.js"],
    setupFilesAfterEnv: ["./jest.setupAfterEnv.js"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.[jt]sx?$": "babel-jest",
    },
    testPathIgnorePatterns: [
        "/node_modules/",
        "./jest.setup.js"
    ],
};
