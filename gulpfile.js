var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var htmlMinifier = require('gulp-html-minifier');
var uglify = require('gulp-uglify');

gulp.task('build-js-for-development', function () {
  return browserify('./source/js/app.jsx')
        .transform('babelify', { presets: ['react', 'es2015'] })
        .bundle()
        .pipe(vinylSourceStream('app.js'))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('build-js-for-production', function () {
  return browserify('./source/js/app.jsx')
        .transform('babelify', { presets: ['react', 'es2015'] })
        .bundle()
        .pipe(vinylSourceStream('app.js'))
        .pipe(vinylBuffer())
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('build-html-for-development', function () {
  return gulp
        .src('./source/*.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('build-html-for-production', function () {
  return gulp
        .src('./source/*.html')
        .pipe(htmlMinifier({ collapseWhitespace: true }))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
  gulp.watch('./source/js/**/*.{jsx,js}', ['build-js-for-development']);
  gulp.watch('./source/**/*.html', ['build-html-for-development']);
});

gulp.task('build-for-development', ['build-js-for-development', 'build-html-for-development']);
gulp.task('build-for-production', ['build-js-for-production', 'build-html-for-production']);

gulp.task('default', ['build-for-development', 'watch']);
