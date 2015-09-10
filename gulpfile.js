//load plugins
var gulp             = require('gulp'),
  	compass          = require('gulp-compass'),
  	autoprefixer     = require('gulp-autoprefixer'),
  	minifycss        = require('gulp-minify-css'),
  	uglify           = require('gulp-uglify'),
    watch            = require('gulp-watch'),
  	rename           = require('gulp-rename'),
  	concat           = require('gulp-concat'),
  	notify           = require('gulp-notify'),
  	livereload       = require('gulp-livereload'),
  	plumber          = require('gulp-plumber'),
    connect          = require('gulp-connect'),
    concat           = require('gulp-concat'),
    livereload       = require('gulp-livereload'),
  	path             = require('path');

//the title and icon that will be used for the Grunt notifications
var notifyInfo = {
	title: 'Gulp',
	icon: path.join(__dirname, 'gulp.png')
};

//error notification settings for plumber
var plumberErrorHandler = { errorHandler: notify.onError({
		title: notifyInfo.title,
		icon: notifyInfo.icon,
		message: "Error: <%= error.message %>"
	})
};

//styles
gulp.task('styles', function() {
	return gulp.src(['src/scss/**/*.scss'])
		.pipe(plumber(plumberErrorHandler))
		.pipe(compass({
			css: 'html/css',
			sass: 'src/scss',
			image: 'html/images'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concat('styles.css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('html/css'))
    .pipe(livereload());
});

//scripts
gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(plumber(plumberErrorHandler))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('html/js'))
		// .pipe(rename({ suffix: '.min' }))
		// .pipe(uglify())
		// .pipe(gulp.dest('html/js'))
    .pipe(livereload());
});

//server
gulp.task('server', function () {
  connect.server({
    livereload: true
  });
});

//watch
gulp.task('live', function() {
	livereload.listen();

	//watch .scss files
	gulp.watch('src/scss/**/*.scss', ['styles']);

	//watch .js files
	gulp.watch('src/js/**/*.js', ['scripts']);

	//reload when a template file, the minified css, or the minified js file changes
  var files = ['templates/*.html', 'html/css/partials/styles.min.css']; //,'html/js/main.min.js'
  gulp.watch(files, function(event) {
		gulp.src(event.path)
			.pipe(plumber())
			.pipe(livereload())
			.pipe(notify({
				title: notifyInfo.title,
				icon: notifyInfo.icon,
				message: event.path.replace(__dirname, '').replace(/\\/g, '/') + ' was ' + event.type + ' and reloaded'
			})
		);
	});
});

gulp.task('default', ['server', 'live', 'styles', 'scripts']);
