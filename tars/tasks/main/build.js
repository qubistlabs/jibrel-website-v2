'use strict';

const gulp = tars.packages.gulp;
const gutil = tars.packages.gutil;
const runSequence = tars.packages.runSequence.use(gulp);

let runSeq = [];
tars.config.buildLang.map((lang) => {
    const seq = [
        'set-lang:'+lang,
        'main:build-dev',
        [
            'html:modify-html', 'images:minify-images'
        ],
        'main:create-build',
        [
            'css:compress-css'
        ],
        'service:zip-build',
    ]
    runSeq = runSeq.concat(seq)
})

/**
 * Build release version
 */
module.exports = () => {
    return gulp.task('main:build', () => {
        runSequence(
            ...runSeq,
            () => {
                console.log(
                    gutil.colors.black.bold('\n------------------------------------------------------------')
                );
                tars.say(
                    gutil.colors.green.bold(' Build has been created successfully!')
                );

                if (tars.config.useBuildVersioning) {
                    tars.say(gutil.colors.white.bold('Build version is: ', tars.options.build.version));
                }
                console.log(
                    gutil.colors.black.bold('------------------------------------------------------------\n')
                );
            }
        );
    });
};
