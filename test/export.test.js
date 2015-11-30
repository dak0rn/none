/**
 * Tests for the exports.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	26 Nov 2015
 * Updated:	Time-stamp: <2015-11-30 09:49:53 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
var nonejs = require('../dist/none.test.js');
var expect = require('chai').expect;

describe('none.js export', function() {

    it('should be a function', function() {
        expect( nonejs ).to.be.a('function');
    });
    
});
