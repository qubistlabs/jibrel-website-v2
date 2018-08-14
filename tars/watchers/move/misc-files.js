'use strict';

/**
 * Watcher for misc files
 */
module.exports = () => {
    return tars.packages.chokidar.watch(
        `src/${tars.config.fs.staticFolderName}/misc/**/*.*`,
        Object.assign(tars.options.watch, {
            ignored: `src/${tars.config.fs.staticFolderName}/misc/**/*.tmp`
        })
    ).on('all', (event, watchedPath) => {
        tars.helpers.watcherLog(event, watchedPath);
        tars.packages.gulp.start('other:move-misc-files');
    });
};
