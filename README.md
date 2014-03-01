gulp-json-lint
=========

JSON linter plugin for Gulp.


First install gulp-json-lint
```shell
npm install --save-dev gulp-json-lint
```


Usage:
```javascript
var jsonlint = require('gulp-json-lint');

gulp.task('jsonlint', function(){
      gulp.src('source.json')
        .pipe(jsonlint())
        .pipe(jsonlint.report('verbose'));
});
```


The output is added to file.jsonlint.
You can output the errors by using reporters.
There are two default reporters:
* 'json' prints stringified JSON to console.log.
* 'verbose' prints longer human-readable failures to console.log.

Reporters are executed only if there is an error.

You can use your own reporter by supplying a function.
```javascript
/* Output is in the following form:
 * {
 *   "error": "Unknown Character 'a', expecting a string for key statement.",
 *   "line": 2,
 *   "character": 5
 * }
 */
var testReporter = function (lint, file) {
    console.log(file.path + ': ' + lint.error);
};

gulp.task('invalid', function(){
      gulp.src('invalid.json')
        .pipe(jsonlint())
        .pipe(jsonlint.report(testReporter));
});
```

gulp-json-lint only has one option, which specifies if comments are allowed. By default, they're not.
```javascript
gulp.task('comments-valid', function(){
      gulp.src('comments.json')
        .pipe(jsonlint({
          comments: true
        }))
        .pipe(jsonlint.report('verbose'));
});
```

Development
===========

Fork this repository, run npm install and send pull requests.