module.exports = {
	testEnvironment : "jsdom",
	transform       : {
		"^.+\\.(j|t)sx?$" : "babel-jest",
	},
	moduleNameMapper : {
		"\\.(css|less|scss|sass)$" : "identity-obj-proxy",
	},
	setupFilesAfterEnv : ["@testing-library/jest-dom", "./jest.setup.js"],
};
