const util = require('util');
const { EventEmitter } = require('events');

function Resource (m) {
    let maxEvents = m;
    let self = this;
    process.nextTick(function(){
        let count = 0;
        self.emit('start');
        let t = setInterval(function(){
            self.emit('data', ++count);
            if (count === maxEvents) {
                self.emit('end', count);
                clearInterval(t);
            }
        },10);

    });
};

util.inherits(Resource, EventEmitter);
module.exports = Resource;