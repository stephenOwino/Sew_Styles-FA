module.exports = {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	moduleFileExtensions: ["js", "jsx"],
	coverageDirectory: "coverage",
	collectCoverage: true,
};
