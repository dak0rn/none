/**
 * grunt-contrib-uglify configuration.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	26 Nov 2015
 * Updated:	Time-stamp: <2015-11-26 05:33:54 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
module.exports = function() {

    return {
        none: {
            files: {
                'dist/none.min.js': ['dist/none.js']
            }
        }
    };
};
