const request = require('request'); // third party module,

const s = request('http://www.pluralsight.com'); //this will return a stream

s.on('data', function(chunk){
    console.log('>>>Data>>> ' + chunk);
});

s.on('end', function(){
    console.log('>>>Done!');
})