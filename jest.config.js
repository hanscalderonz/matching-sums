module.exports = {
	testEnvironment : "jsdom",
	transform       : {
		"^.+\\.(j|t)sx?$" : "babel-jest",
	},
	moduleNameMapper : {
		"\\.(css|less|scss|sass)$" : "identity-obj-proxy",
		"@Components/(.*)"         : "<rootDir>/src/components/$1",
		"@Types/(.*)"              : "<rootDir>/src/types/$1",
	},
	setupFilesAfterEnv : ["@testing-library/jest-dom", "./jest.setup.js"],
};
