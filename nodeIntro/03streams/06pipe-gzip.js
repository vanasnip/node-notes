const request = require('request');
const fs = require('fs');
const zlib = require('zlib');

const s = request('http://www.pluralsight.com/');

s.pipe(zlib.createGzip()).pipe(fs.createWriteStream('./nodeIntro/03streams/07-pluralsight.html.gz'));