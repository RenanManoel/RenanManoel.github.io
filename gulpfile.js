//gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


gulp.task('hello', function(){
    console.log('hello world');
});