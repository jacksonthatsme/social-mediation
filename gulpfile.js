// Define variables
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const haml = require('gulp-ruby-haml');
const rename = require('gulp-rename');

// Register Tasks
gulp.task('sass', function() {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('js:vendor', function() {
  return gulp.src(['./assets/javascripts/vendor/*.js'])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('./assets/js/'));
});

gulp.task('js:custom', function() {
  return gulp.src('./assets/javascripts/*.js')
    .pipe(concat('site.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/'));
});

// gulp.task('haml', function() {
//   return gulp.src('**/_haml/*.haml')
//     .pipe(haml({'style': 'indented'}))
//     .pipe(rename(function (path) {
//        var temp = path.dirname.replace('/_haml','');
//        path.dirname = temp;
//     }))
//     .pipe(gulp.dest('.'));
// });

gulp.task('js', ['js:vendor', 'js:custom']);

gulp.task('build', ['sass','js']);

gulp.task('default', ['build']);

gulp.task('watch', function(){
  gulp.watch('./assets/scss/**/*.scss', ['build']);
  gulp.watch('./assets/javascripts/*.js', ['build']);
});
