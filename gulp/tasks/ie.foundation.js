'use strict';

module.exports = function() {
  $.gulp.task('ie:foundation', function() {
    return $.gulp.src($.path.ieFoundation)
      .pipe($.gp.concat('ie.js'))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
