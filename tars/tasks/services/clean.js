'use strict';

const gulp = tars.packages.gulp;
const del = tars.packages.del;
const preProcName = tars.cssPreproc.name;
const preprocExtension = tars.cssPreproc.mainExt;
const spritesCssPath = `./src/${tars.config.fs.staticFolderName}/${preProcName}/sprites-${preProcName}`;

const pathsToDel = [
    './dev/',
    `${spritesCssPath}/sprite_96.${preprocExtension}`,
    `${spritesCssPath}/svg-fallback-sprite.${preprocExtension}`,
    `${spritesCssPath}/svg-sprite.${preprocExtension}`,
    './.tmpTemplater/',
    './.tmpPreproc/'
];

/**
 * Clean dev directory and cache
 */
module.exports = () => {
    return gulp.task('service:clean', done => {
        const delThis = pathsToDel.slice(0)

        if (!tars.config.useBuildVersioning && !tars.options.watch.isActive) {
            delThis.push(tars.options.build.path);
        }

        del(delThis).then(() => {
            done();
        });
    });
};
