'use strict';

// This is example of task function

const gulp = tars.packages.gulp;
const plumber = tars.packages.plumber;
const notifier = tars.helpers.notifier;

const tarsConfig = tars.config;

const LANG = 'EnUS'

/**
 * Task description
 */
module.exports = function () {

  return gulp.task('set-lang:'+LANG, function (done) {   
    tars.options.build.lang = LANG
    tars.options.build.path = `${tars.config.buildPath}${LANG}/`;
    
    // You can return callback, if you can't return pipe
    done(null);
  });
  
};
