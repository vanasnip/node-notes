var maxTime = 1000;

// if input is even, double it
//if input is odd, error
// (call takes random amount of time < 1s)

var evenDoubler = function (v, callback) {
    const waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v % 2) {
        setTimeout(function () {
            callback(new Error('Odd input'));
        }, waitTime);
    } else {
        setTimeout(function(){
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

var evenDoublerSync = function (v) {
    if (v % 2) {
        throw (new Error('Odd input'));
    } else {
        return (v * 2);
    }
}

module.exports = {
    evenDoubler,
    evenDoublerSync
};