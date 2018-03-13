var {EventEmitter} = require('events');

let getResource = function(c){
    let e = new EventEmitter();
    process.nextTick(function(){
        let count = 0;
        e.emit('start');
        var t = setInterval(function(){
            e.emit('data', ++count);
            if(count === c){
                e.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
    return(e);
};

let r = getResource(7);

r.on('start', function(){
    console.log('I \'ve started!');
});
r.on('data', function(d){
    console.log(' I recieved data -> ' + d);
});
r.on('end', function(t){
    console.log('I\'m done with ' + t + " data events.\n");
})
