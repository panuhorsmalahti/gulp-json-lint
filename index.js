/*jslint node:true */
/*jslint nomen: true */

// Requires
var jsonlint = require( 'json-lint' );

// Gulp
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var map = require('map-stream');

"use strict";

// Helper function
function isFunction(f) {
    return Object.prototype.toString.call(f) === '[object Function]';
}

/*
 * Define default reporters
 */
var jsonReporter = function (lint) {
    console.log(JSON.stringify(lint));
};

var verboseReporter = function (lint, file) {
    console.log('(' + lint.error + ') ' + file.path
        + '[' + lint.line + ', ' + lint.character + ']');
};


/*
 * Main plugin function
 */
var jsonlintPlugin = function(pluginOptions) {
    if (!pluginOptions) {
        pluginOptions = {
            comments: false
        };
    }

    // Default options
    if (typeof pluginOptions.comments !== 'boolean') {
        pluginOptions.comments = false;
    }

    return map(function(file, cb) {
        var result = jsonlint(file.contents.toString('utf8'), pluginOptions);
        file.jsonlint = {
            error: result.error,
            line: result.line,
            character: result.character
        };

        // Pass file
        cb(null, file);
    });
};

jsonlintPlugin.report = function (reporter) {
    return map(function(file, cb) {
        if (file.jsonlint.error) {
            if (reporter === 'json') {
                jsonReporter(file.jsonlint);
            } else if (reporter === 'verbose') {
                verboseReporter(file.jsonlint, file);
            } else if (isFunction(reporter)) {
                reporter(file.jsonlint, file);
            }
        }

        // Pass
        cb(null, file);
    });
};

module.exports = jsonlintPlugin;