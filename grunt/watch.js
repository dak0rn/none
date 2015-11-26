/**
 * grunt-watch configuration.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	26 Nov 2015
 * Updated:	Time-stamp: <2015-11-26 05:23:14 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
module.exports = function() {

    return {
        none: {
            files: ['src/**/*.js'],
            tasks: ['dev']
        }
    };
};
