const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
  return src('index.scss')
    .pipe(sass({ includePaths: ['./node_modules'] }))
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'));
}

function watchTask() {
  watch(['config.scss', 'index.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
