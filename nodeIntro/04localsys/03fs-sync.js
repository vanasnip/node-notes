const fs = require('fs');
const wkloc = 'nodeIntro/04localsys/'

if (fs.existsSync(wkloc+'tempSync')) {
    console.log('Directory exists, removing...');
    if (fs.existsSync(wkloc+'tempSync/new.txt')){
        fs.unlinkSync(wkloc+'tempSync/new.txt');
    }
    fs.rmdirSync(wkloc+'tempSync');
}

fs.mkdirSync(wkloc+'tempSync');
if (fs.existsSync(wkloc+'tempSync')) {
    process.chdir(wkloc+'tempSync');
    fs.writeFileSync('test.txt', 'This is some test text for the file, no need to panic, its all in hand. really what else is gotta be done?');
    fs.renameSync('test.txt', 'new.txt');
    console.log('File has size: ' + fs.statSync('new.txt').size + ' bytes');
    console.log('File contents: ', fs.readFileSync('new.txt').toString());
}