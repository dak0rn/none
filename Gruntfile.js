/**
 * Gruntfile.
 * Build configuration for none.js
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	26 Nov 2015
 * Updated:	Time-stamp: <2015-11-26 05:15:06 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
module.exports = function(grunt) {

    require('load-grunt-config')(grunt, {

        // Automatically execute grunt.initConfig()
        init: true,

        // Use jit-grunt to speed up the build process
        jitGrunt: {

            // Static mappings of file names to grunt plugins
            staticMappings: {
                mochaTest: 'grunt-mocha-test'
            }
        }

    });

};
