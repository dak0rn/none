/**
 * Tests for the exports.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	26 Nov 2015
 * Updated:	Time-stamp: <2015-11-26 05:45:09 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
var nonejs = require('../dist/none.js');
var expect = require('chai').expect;

describe('none.js export', function() {

    it('should be a function', function() {
        expect( nonejs ).to.be.a('function');
    });
    
});
