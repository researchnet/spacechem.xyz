const gulp = require('gulp');

gulp.task('default', () => {
	return gulp.src('source/**')
		.pipe(gulp.dest('target'));
});