/**
 * Configuration for grunt-mocha-istanbul.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	29 Nov 2015
 * Updated:	Time-stamp: <2015-11-29 17:21:39 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
var coveralls = require('coveralls');

module.exports = function(grunt) {

    grunt.event.on('coverage', function(lcov, done) {

        coveralls.handleInput(lcov, function(err) {
            if( err )
                return done(err);

            return done();
        });
        
    });

    return {
        none: {
            src: 'test/**/*.test.js',
            options: {
                coverage: true,
                reportFormats: ['cobertura', 'lcovonly']
            }
        }
    };
};
