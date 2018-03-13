const request = require('request');

const s = request('http://www.pluralsight.com/');

s.pipe(process.stdout);