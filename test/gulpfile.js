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

gulp.task('invalid', function(){
      gulp.src('invalid.json')
        .pipe(jsonlint())
        .pipe(jsonlint.report('json'))
        .pipe(jsonlint.report('verbose'));
});

