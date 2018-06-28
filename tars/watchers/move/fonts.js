'use strict';

/**
 * Watcher for font files
 */
module.exports = () => {
    return tars.packages.chokidar.watch(
        `src/${tars.config.fs.staticFolderName}/fonts/**/*.*`,
        tars.options.watch
    ).on('all', (event, watchedPath) => {
        tars.helpers.watcherLog(event, watchedPath);
        tars.packages.gulp.start('other:move-fonts');
    });
};
