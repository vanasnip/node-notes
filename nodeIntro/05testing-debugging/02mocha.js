const should = require('should');
const fun = require('./mathfun');

describe('Mathfun', () => {
    describe('when used synchronously', () => {
        it('should double even numbers correctly', () => {
            fun.evenDoublerSync(2).should.equal(4);
        });
        it.skip('should throw on odd numbers', function (done) {
            (function () {
                fun.evenDoublerSync(3);
            }).should.throw(/Odd/);
            done();
        })
    });
    describe('when used asynchronously', function () {
        it('should double even numbers correctly', function (done) {

            fun.evenDoubler(2, function (err, results) {
                should.not.exist(err);
                results.should.equal(4);
                done();
            });
        });
        it('should return error on odd numbers', function (done) {
            fun.evenDoubler(3, function (err, results){
                should.exist(err);
                should.not.exist(results);
                done();
            })
        })
    });

});