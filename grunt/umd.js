/**
 * grunt-umd configuration.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	26 Nov 2015
 * Updated:	Time-stamp: <2015-11-30 09:49:37 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
module.exports = function(grunt) {

    return {
        none: {
            options: {
                src: 'src/none.js',
                dest: 'dist/none.js',
                objectToExport: 'none',
                globalAlias: 'none'
            }
        },

        test: {
            options: {
                template: 'umd.test.hbs',
                src: 'src/none.js',
                dest: 'dist/none.test.js',
                objectToExport: 'none'
            }
        }
    };
};
