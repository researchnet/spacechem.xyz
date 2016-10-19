const gulp = require('gulp');

gulp.task('default', () => gulp.src('source/**').pipe(gulp.dest('target')));

gulp.task('test', []);