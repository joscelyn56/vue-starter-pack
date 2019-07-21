var { task, src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass');

function start () {
	watch('assets/sass/**/*.scss', { events: 'change' } , function(cb) {
	  src('assets/sass/**/*.scss')
	    .pipe(sass().on('error', sass.logError))
	    .pipe(dest('./assets/css/'))

	    cb()
	})
}

//Watch task
task('default',function() {
  watch('assets/sass/**/*.scss', series(start));
})

