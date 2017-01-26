/**
 * Created by snatvb on 17.01.17.
 */

const gulp = require('gulp');
const xmlCollect = require('./index');

gulp.task('default', function () {
  return gulp.src('./test/meta.xml')
    .pipe(xmlCollect({ignoreFolders: ['utrix']}))
    .pipe(gulp.dest('./dist'))
});
