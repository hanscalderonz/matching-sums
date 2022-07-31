module.exports = {
	env : {
		browser : true,
		node    : true,
		jest    : true,
		es2021  : true,
	},
	extends : [
		"plugin:react/recommended",
		"airbnb",
	],
	parser        : "@typescript-eslint/parser",
	parserOptions : {
		ecmaFeatures : {
			jsx : true,
		},
		ecmaVersion                 : "latest",
		sourceType                  : "module",
		allowImportExportEverywhere : true,
	},
	plugins : [
		"react",
		"@typescript-eslint",
		"jsx-a11y",
		"react-hooks",
		"lodash-fp",
		"align-import",
	],
	rules : {
		"react/require-default-props"       : "off",
		"no-param-reassign"                 : ["error", { props : true, ignorePropertyModificationsFor : ["state"] }],
		"import/no-extraneous-dependencies" : ["off", { packageDir : ["./stories"] }],
		"import/prefer-default-export"      : "off",
		"import/no-duplicates"              : "off",
		"no-restricted-exports"             : "off",
		"no-use-before-define"              : "off",
		"no-undef"                          : "off",
		"no-plusplus"                       : "off",
		"no-unused-vars"                    : "off",
		"@typescript-eslint/no-unused-vars" : [
			"warn",
			{ argsIgnorePattern : "^_" },
		],
		"import/extensions" : [
			"error",
			"ignorePackages",
			{
				js  : "never",
				jsx : "never",
				ts  : "never",
				tsx : "never",
			},
		],
		"react/forbid-prop-types"      : 0,
		"react-hooks/rules-of-hooks"   : "error",
		// Checks rules of Hooks
		"react-hooks/exhaustive-deps"  : "warn",
		// Checks effect dependencies.
		"react/jsx-filename-extension" : [
			2,
			{
				extensions : [".js", ".jsx", ".ts", ".tsx"],
			},
		],
		"react/jsx-uses-react"                      : "off",
		"react/react-in-jsx-scope"                  : "off",
		"react/jsx-props-no-spreading"              : "off",
		"lodash-fp/consistent-compose"              : "off",
		"lodash-fp/consistent-name"                 : ["error", "_"],
		"lodash-fp/no-argumentless-calls"           : "error",
		"lodash-fp/no-chain"                        : "error",
		"lodash-fp/no-extraneous-args"              : "error",
		"react/function-component-definition"       : "off",
		"lodash-fp/no-extraneous-function-wrapping" : "error",
		"no-restricted-syntax"                      : "off",
		"arrow-body-style"                          : "off",
		"arrow-parens"                              : [2, "as-needed"],
		"lodash-fp/no-extraneous-iteratee-args"     : "error",
		"align-import/align-import"                 : "error",
		"align-import/trim-import"                  : "error",
		"lodash-fp/no-extraneous-partials"          : "error",
		"lodash-fp/no-for-each"                     : "off",
		"lodash-fp/no-partial-of-curried"           : "error",
		"linebreak-style"                           : "off",
		"lodash-fp/no-single-composition"           : "error",
		"lodash-fp/no-submodule-destructuring"      : "error",
		"lodash-fp/no-unused-result"                : "error",
		"lodash-fp/prefer-compact"                  : "error",
		"no-tabs"                                   : "off",
		"lodash-fp/prefer-composition-grouping"     : "error",
		"lodash-fp/prefer-constant"                 : [
			"error",
			{
				arrowFunctions : false,
			},
		],
		"lodash-fp/prefer-flat-map" : "error",
		"lodash-fp/prefer-get"      : "error",
		"lodash-fp/prefer-identity" : [
			"error",
			{
				arrowFunctions : false,
			},
		],
		"lodash-fp/preferred-alias" : "off",
		"lodash-fp/use-fp"          : "error",
		indent                      : ["error", "tab"],
		"no-mixed-spaces-and-tabs"  : [
			"error",
			"smart-tabs",
		],
		quotes : [
			"error",
			"double",
		],
		semi : [
			"error",
			"always",
		],
		"space-before-function-paren" : [
			"error",
			{
				anonymous  : "never",
				named      : "never",
				asyncArrow : "always",
			},
		],
		"comma-dangle" : [
			"error",
			{
				arrays    : "always-multiline",
				objects   : "always-multiline",
				imports   : "always-multiline",
				exports   : "always-multiline",
				functions : "ignore",
			},
		],
		"key-spacing" : [
			"error",
			{
				singleLine : {
					beforeColon : true,
					afterColon  : true,
				},
				multiLine : {
					align       : "colon",
					beforeColon : true,
					afterColon  : true,
				},
			},
		],
		"eol-last" : [
			"error",
			"always",
		],
		"max-len" : [
			"error",
			{
				code          : 120,
				ignoreUrls    : true,
				ignorePattern : "^import .*",
			},
		],
		"keyword-spacing"     : "error",
		"space-before-blocks" : "error",
		"comma-spacing"       : [
			"error",
			{
				before : false,
				after  : true,
			},
		],
		"no-trailing-spaces"      : "error",
		"no-multi-spaces"         : [2, { exceptions : { ImportDeclaration : true } }],
		"no-multiple-empty-lines" : ["error", { max : 2, maxEOF : 1 }],
		"react/jsx-indent"        : [
			1,
			"tab",
		],
		"react/jsx-indent-props" : [
			1,
			"tab",
		],
		"react/jsx-curly-newline" : [
			"error",
			{
				multiline  : "consistent",
				singleline : "consistent",
			},
		],
		"react/jsx-tag-spacing" : [
			"error",
			{
				closingSlash      : "never",
				beforeSelfClosing : "always",
				afterOpening      : "never",
				beforeClosing     : "never",
			},
		],
	},
	settings : {
		"import/resolver" : {
			"eslint-import-resolver-custom-alias" : {
				alias : {
					"@components" : "src/components",
				},
				extensions : [".ts", ".tsx", ".css"],
			},
		},
	},
};
