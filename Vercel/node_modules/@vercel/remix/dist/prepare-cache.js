"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareCache = void 0;
const path_1 = require("path");
const build_utils_1 = require("@vercel/build-utils");
const prepareCache = async ({ entrypoint, repoRootPath, workPath, }) => {
    let cacheDirectory = '.cache';
    const mountpoint = (0, path_1.dirname)(entrypoint);
    const entrypointFsDirname = (0, path_1.join)(workPath, mountpoint);
    try {
        const remixConfig = require((0, path_1.join)(entrypointFsDirname, 'remix.config'));
        if (remixConfig.cacheDirectory) {
            cacheDirectory = remixConfig.cacheDirectory;
        }
    }
    catch (err) {
        // Ignore error if `remix.config.js` does not exist
        if (err.code !== 'MODULE_NOT_FOUND')
            throw err;
    }
    const root = repoRootPath || workPath;
    const [nodeModulesFiles, cacheDirFiles] = await Promise.all([
        // Cache `node_modules`
        (0, build_utils_1.glob)('**/node_modules/**', root),
        // Cache the Remix "cacheDirectory" (typically `.cache`)
        (0, build_utils_1.glob)((0, path_1.relative)(root, (0, path_1.join)(entrypointFsDirname, cacheDirectory, '**')), root),
    ]);
    return { ...nodeModulesFiles, ...cacheDirFiles };
};
exports.prepareCache = prepareCache;
//# sourceMappingURL=prepare-cache.js.map