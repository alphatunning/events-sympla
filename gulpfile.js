var gulp = require('gulp');
	imagemin = require('gulp-imagemin');
	clean = require('gulp-clean');
	concat = require('gulp-concat');
	htmlreplace = require('gulp-html-replace');
	uglify = require('gulp-uglify');
	browserSync = require('browser-sync');
	jshint = require("gulp-jshint");
	jshintStylish = require('jshint-stylish');
	scsslint = require('gulp-scss-lint');
	autoprefixer = require('gulp-autoprefixer');
	sass = require('gulp-sass');
	sourcemaps = require('gulp-sourcemaps');
	cache = require('gulp-cache');
	rename = require('gulp-rename');
	minifycss = require('gulp-minify-css'),
	minifyhtml= require('gulp-minify-html'); 
	usemin = require('gulp-usemin');

// Development Tasks 
// -----------------

gulp.task('default', ['sass'],function(){

	gulp.start('server');
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);

	});

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer('last 2 version'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
		}));
	})

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
		});
	});

//Quality codes
gulp.task('scss-lint', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(scsslint())
	.pipe(gulp.dest('dist/css') );
	});

gulp.task('hint-js', function (event) {
	return gulp.src('app/js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter(jshintStylish));
	});


// Optimization Tasks 
// ------------------

gulp.task('build', ['clean'],function() {
	gulp.start('usemin','images','fonts','videos');
	});


gulp.task('clean', function() {
	return gulp.src('dist')
	.pipe(clean());
	});

// Optimizing CSS and JavaScript 
gulp.task('usemin', ['sass'], function() {

	return gulp.src('app/**/*.html')
	.pipe(usemin({
		css:[minifycss],
		csslibs:[minifycss],
		js:[]
		}))
	.pipe(gulp.dest('dist'));
	});

// Optimizing Images 
gulp.task('images', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
	.pipe(gulp.dest('dist/img'));
	});

// Copying fonts 
gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
	})

// Copying videos 
gulp.task('videos', function() {
	return gulp.src('app/videos/**/*')
	.pipe(gulp.dest('dist/videos'))
	})