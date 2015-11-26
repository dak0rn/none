/**
 * grunt-umd configuration.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	26 Nov 2015
 * Updated:	Time-stamp: <2015-11-26 05:36:04 dak0rn>
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
        }
    };
};
