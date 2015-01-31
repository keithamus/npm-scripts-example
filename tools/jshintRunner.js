//build-jshint - https://www.npmjs.com/package/build-jshint
//Helper for running JSHint on files and directories
var buildJSHint = require('build-jshint');


// Example output:
// JSHint error at "src/my_file.js":32
// Missing semicolon.
// 32 | dont(care())

// With options
var opts = {
    // Array of globs of files to skip
    ignore: [
        '**/jquery*.js'
    ],

    // Handles output of errors
    // Default reporter logs errors to the console
    //reporter: function(error, file, src) {
        // `error` is the JSHint error object
        // `file` is the path to the source file
        // `src` is the contents of the source file
    //},

    // Configuration for JSHint
    config: { undef: true },

    // Global variables declared (passed to JSHint)
    globals: { document: false }
};

var files = [
        'src/**/*.js'
    ];

buildJSHint(files, opts, function(err, hasError) {
    // `err` is a fatal error, *not* a JSHint error
    // `hasError` indicates if any of the files had a JSHint error
});