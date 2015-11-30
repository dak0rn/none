/**
 * Tests for the none.js function.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	26 Nov 2015
 * Updated:	Time-stamp: <2015-11-30 09:50:00 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
var expect = require('chai').expect;
var nonejs = require('../dist/none.test.js');

var noise = (function() {
    var pool = [void 0, null, function(){}, {}, [], false, true];

    return function(length) {
        var noise = [];
        var i = length;
        var r;
        var e;

        while( --i ) {
            r = Math.random();

            if( r < 0.5 ) {
                e = pool[ Math.floor( Math.random() * pool.length ) ];
            }
            else if( Math.random() < 0.5 ) {
                e = String.fromCharCode(Math.floor( Math.random() * 94 ) + 32);
            }
            else {
                e = Math.random() * 100000;
            }


            noise.push(e);
        }

        return noise;
    };

})();

describe('none.js function', function() {

    it('should take no arguments', function() {
        expect( nonejs.length ).to.equal(0);
    });

    it('should return undefined', function() {
        expect( nonejs() ).to.equal(void 0);
    });

    describe('should not return something other than undefined', function() {
        var data = noise(100);
        var i = data.length;
        var e;

        while( --i ) {
            e = data[i];
            it('when given ' + e, function() {

                expect( nonejs(e) ).to.equal(void 0);
                
            });
        }
        
    });

    it('should have no influence on 42', function() {
        nonejs();
        expect(42).to.equal(42);
    });

    it('should have no influence on undefined', function() {
        nonejs();
        expect(undefined).to.equal(undefined);
    });

    it('should have no influence on null', function() {
        nonejs();
        expect(null).to.equal(null);
    });

    it('should have no influence on "str"', function() {
        nonejs();
        expect('str').to.equal('str');
    });
});
