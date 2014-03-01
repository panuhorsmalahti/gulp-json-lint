gulp-jsonlint
=========

Note: This is work in progress.

JSON linter plugin for Gulp.


First install gulp-jsonlint
```shell
npm install --save-dev gulp-jsonlint
```


Usage:
```javascript
var jsonlint = require('gulp-jsonlint');

gulp.task('jsonlint', function(){
      gulp.src('source.json')
        .pipe(jsonlint())
        .pipe(jsonlint.report('verbose'));
});
```


The output (stringified JSON) is added to file.jsonlint
You can output the errors by using reporters.
There are two default reporters:
* 'json' prints stringified JSON to console.log.
* 'verbose' prints longer human-readable failures to console.log.

Reporters are executed only if there is at least one failure.

You can use your own reporter by supplying a function.
```javascript
/* Output is in the following form:
 * [{ }]
 */

gulp.task('invalid-custom', function(){
      gulp.src('invalid.ts')
        .pipe(tslint())
        .pipe(tslint.report(testReporter));
});
```

```

Development
===========

Fork this repository, run npm install and send pull requests.