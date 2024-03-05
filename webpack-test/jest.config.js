const root = require("path").resolve(__dirname, "../");

module.exports = {
	"forceExit": false,
	"setupFiles": [
		"<rootDir>/setupEnv.js"
	],
	"setupFilesAfterEnv": [
		"<rootDir>/setupTestFramework.js"
	],
	"testMatch": [
		// "<rootDir>/AbstractMethodError.unittest.js",
		// "<rootDir>/ArrayHelpers.unittest.js",
		// "<rootDir>/BannerPlugin.test.js",
		// "<rootDir>/BinaryMiddleware.unittest.js",
		// "<rootDir>/BuildDependencies.longtest.js",
		// "<rootDir>/ChangesAndRemovals.test.js",
		// "<rootDir>/Chunk.unittest.js",
		// "<rootDir>/Cli.basictest.js",
		// "<rootDir>/Compiler-caching.test.js",
		"<rootDir>/Compiler.test.js",
		// "<rootDir>/ConfigCacheTestCases.longtest.js",
		"<rootDir>/ConfigTestCases.basictest.js",
		// "<rootDir>/ContextModule.unittest.js",
		// "<rootDir>/ContextModuleFactory.unittest.js",
		// "<rootDir>/Defaults.unittest.js",
		// "<rootDir>/Errors.test.js",
		"<rootDir>/Examples.test.js",
		// "<rootDir>/FileSystemInfo.unittest.js",
		// "<rootDir>/HotModuleReplacementPlugin.test.js",
		"<rootDir>/HotTestCasesAsyncNode.test.js",
		"<rootDir>/HotTestCasesNode.test.js",
		"<rootDir>/HotTestCasesWeb.test.js",
		"<rootDir>/HotTestCasesWebWorker.test.js",
		// "<rootDir>/JavascriptParser.unittest.js",
		// "<rootDir>/LazySet.unittest.js",
		// "<rootDir>/LocalModulesHelpers.unittest.js",
		// "<rootDir>/MemoryLimitTestCases.test.js",
		// "<rootDir>/ModuleDependencyError.unittest.js",
		"<rootDir>/MultiCompiler.test.js",
		// "<rootDir>/MultiItemCache.unittest.js",
		"<rootDir>/MultiStats.test.js",
		// "<rootDir>/MultiWatching.unittest.js",
		// "<rootDir>/NodeTemplatePlugin.test.js",
		// "<rootDir>/NormalModule.unittest.js",
		// "<rootDir>/NullDependency.unittest.js",
		// "<rootDir>/PersistentCaching.test.js",
		// "<rootDir>/ProfilingPlugin.test.js",
		// "<rootDir>/ProfilingPlugin.unittest.js",
		// "<rootDir>/ProgressPlugin.test.js",
		// "<rootDir>/RawModule.unittest.js",
		// "<rootDir>/RequestShortener.unittest.js",
		// "<rootDir>/RuntimeTemplate.unittest.js",
		// "<rootDir>/SemVer.unittest.js",
		// "<rootDir>/SideEffectsFlagPlugin.unittest.js",
		// "<rootDir>/SizeFormatHelpers.unittest.js",
		// "<rootDir>/SortableSet.unittest.js",
		"<rootDir>/Stats.test.js",
		"<rootDir>/StatsTestCases.basictest.js",
		// "<rootDir>/Template.unittest.js",
		// "<rootDir>/TestCasesAllCombined.longtest.js",
		// "<rootDir>/TestCasesCachePack.longtest.js",
		// "<rootDir>/TestCasesDevelopment.test.js",
		// "<rootDir>/TestCasesDevtoolCheapSourceMap.test.js",
		// "<rootDir>/TestCasesDevtoolEval.test.js",
		// "<rootDir>/TestCasesDevtoolEvalCheapModuleSourceMap.test.js",
		// "<rootDir>/TestCasesDevtoolEvalCheapSourceMap.test.js",
		// "<rootDir>/TestCasesDevtoolEvalDeterministicModuleIds.test.js",
		// "<rootDir>/TestCasesDevtoolEvalNamedModules.test.js",
		// "<rootDir>/TestCasesDevtoolEvalSourceMap.test.js",
		// "<rootDir>/TestCasesDevtoolInlineCheapSourceMap.test.js",
		// "<rootDir>/TestCasesDevtoolInlineSourceMap.longtest.js",
		// "<rootDir>/TestCasesDevtoolSourceMap.longtest.js",
		"<rootDir>/TestCasesHot.test.js",
		// "<rootDir>/TestCasesMinimizedSourceMap.longtest.js",
		// "<rootDir>/TestCasesModule.test.js",
		"<rootDir>/TestCasesNormal.basictest.js",
		// "<rootDir>/TestCasesProdGlobalUsed.test.js",
		// "<rootDir>/TestCasesProduction.longtest.js",
		// "<rootDir>/URLAbsoluteSpecifier.unittest.js",
		// "<rootDir>/Validation.test.js",
		// "<rootDir>/WasmHashes.unittest.js",
		// "<rootDir>/Watch.test.js",
		// "<rootDir>/WatchCacheUnaffectedTestCases.longtest.js",
		// "<rootDir>/WatchClose.test.js",
		// "<rootDir>/WatchDetection.test.js",
		// "<rootDir>/WatchSuspend.test.js",
		"<rootDir>/WatchTestCases.longtest.js",
		// "<rootDir>/WatcherEvents.test.js",
		// "<rootDir>/WebpackError.unittest.js",
		// "<rootDir>/cleverMerge.unittest.js",
		// "<rootDir>/compareLocations.unittest.js",
		// "<rootDir>/compileBooleanMatcher.unittest.js",
		// "<rootDir>/deterministicGrouping.unittest.js",
		// "<rootDir>/extractUrlAndGlobal.unittest.js",
		// "<rootDir>/formatLocation.unittest.js",
		// "<rootDir>/identifier.unittest.js",
		// "<rootDir>/nonNumericOnlyHash.unittest.js",
		// "<rootDir>/numberHash.unittest.js",
		// "<rootDir>/objectToMap.unittest.js",
		// "<rootDir>/smartGrouping.unittest.js",
		// "<rootDir>/target-browserslist.unittest.js",
		// "<rootDir>/walkCssTokens.unittest.js",

		// "<rootDir>/*.test.js",
		// "<rootDir>/*.basictest.js",
		// "<rootDir>/*.longtest.js",
		// "<rootDir>/*.unittest.js",
	],
	"watchPathIgnorePatterns": [
		"<rootDir>/.git",
		"<rootDir>/node_modules",
		"<rootDir>/js",
		"<rootDir>/browsertest/js",
		"<rootDir>/fixtures/temp-cache-fixture",
		"<rootDir>/fixtures/temp-",
		"<rootDir>/benchmark",
		"<rootDir>/assembly",
		"<rootDir>/tooling",
		"<rootDir>/examples/*/dist",
		"<rootDir>/coverage",
		"<rootDir>/.eslintcache"
	],
	"modulePathIgnorePatterns": [
		"<rootDir>/.git",
		"<rootDir>/node_modules/webpack/node_modules",
		"<rootDir>/js",
		"<rootDir>/browsertest/js",
		"<rootDir>/fixtures/temp-cache-fixture",
		"<rootDir>/fixtures/temp-",
		"<rootDir>/benchmark",
		"<rootDir>/examples/*/dist",
		"<rootDir>/coverage",
		"<rootDir>/.eslintcache"
	],
	"transformIgnorePatterns": [
		root
	],
	"coverageDirectory": "<rootDir>/coverage",
	"coveragePathIgnorePatterns": [
		"\\.runtime\\.js$",
		"<rootDir>",
		"<rootDir>/schemas",
		"<rootDir>/node_modules"
	],
	"testEnvironment": "./patch-node-env.js",
	"prettierPath": require.resolve("prettier-2"),
	"snapshotFormat": {
		"escapeString": true,
		"printBasicPrototype": true
	}
}
