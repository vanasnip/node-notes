const request = require('request');
const fs = require('fs');

const s = request('http://www.pluralsight.com/');

s.pipe(fs.createWriteStream('./nodeIntro/03streams/05-pluralsight.html'));