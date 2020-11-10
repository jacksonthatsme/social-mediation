// Define variables
const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


// Register Tasks

function css() {
  return src('./assets/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./assets/css/'));
}

function vendors() {
  return src('./assets/javascripts/vendor/*.js')
  .pipe(concat('vendor.js'))
  .pipe(dest('./assets/js/'));
}

function javascripts() {
  return src('./assets/javascripts/*.js')
  .pipe(concat('site.js'))
  // .pipe(uglify())
  .pipe(dest('./assets/js/'));
}

build = series(javascripts, css);

exports.build = build;
exports.vendors = vendors;
exports.default = function() {
  watch(['./assets/scss/**/*.scss', './assets/javascripts/*.js'], build);
}