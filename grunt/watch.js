/**
 * grunt-watch configuration.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	26 Nov 2015
 * Updated:	Time-stamp: <2015-11-26 06:19:39 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
module.exports = function() {

    return {
        none: {
            files: ['src/**/*.js', '!src/**/flycheck*'],
            tasks: ['dev']
        },

        test: {
            files: ['test/**/*.test.js', '!test/**/flycheck*'],
            tasks: ['test']
        }
    };
};
