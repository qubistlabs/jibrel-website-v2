'use strict';

const watcherLog = tars.helpers.watcherLog;

/**
 * Watcher for ie8 stylies
 */
module.exports = () => {
    if (tars.flags.ie8 || tars.flags.ie) {
        return tars.packages.chokidar.watch(
            [
                `src/${tars.config.fs.componentsFolderName}/**/ie8.${tars.cssPreproc.ext}`,
                `src/${tars.config.fs.componentsFolderName}/**/ie8.css`
            ],
            tars.options.watch
        ).on('all', (event, watchedPath) => {
            watcherLog(event, watchedPath);
            tars.packages.gulp.start('css:compile-css-for-ie8');
        });
    }

    return false;
};
