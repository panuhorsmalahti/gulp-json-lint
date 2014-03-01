// Simple Gulpfile
var gulp = require('gulp');
var gutil = require('gulp-util');

// Gulp plugins
var jsonlint = require('../index');

// Prints nothing
gulp.task('valid', function(){
      gulp.src('valid.json')
        .pipe(jsonlint())
        .pipe(jsonlint.report('json'))
        .pipe(jsonlint.report('verbose'));
});

gulp.task('comments-valid', function(){
      gulp.src('comments.json')
        .pipe(jsonlint({
          comments: true
        }))
        .pipe(jsonlint.report('verbose'));
});

gulp.task('comments-invalid', function(){
      gulp.src('comments.json')
        .pipe(jsonlint({
          comments: false
        }))
        .pipe(jsonlint.report('verbose'));
});

gulp.task('invalid', function(){
      gulp.src('invalid.json')
        .pipe(jsonlint())
        .pipe(jsonlint.report('json'))
        .pipe(jsonlint.report('verbose'));
});

var testReporter = function (lint, file) {
    console.log(file.path + ': ' + lint.error);
};

gulp.task('invalid-custom', function(){
      gulp.src('invalid.json')
        .pipe(jsonlint())
        .pipe(jsonlint.report(testReporter));
});