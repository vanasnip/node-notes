const fs = require('fs');
const wkloc = 'nodeIntro/04localsys/'

if (fs.existsSync(wkloc+'tempAsync')) {
    console.log('Directory exists, removing...');
    if (fs.existsSync(wkloc+'tempAsync/new.txt')){
        fs.unlinkSync(wkloc+'tempAsync/new.txt');
    }
    fs.rmdirSync(wkloc+'tempAsync');
}


fs.mkdir(wkloc+'tempAsync', function(err) {
    fs.exists(wkloc+'tempAsync', function(exists){
        if (exists) {
            process.chdir(wkloc+'tempAsync');
            fs.writeFile('test.txt', 'This is some of that file writing action I was talking about earlier', function(err) {
                fs.rename('test.txt', 'new.txt', function(errr){
                    fs.stat('new.txt', function (err, stats) {
                        console.log('File has size: ' + stats + ' bytes');
                        fs.readFile('new.txt', function(err, data) {
                            console.log('File contents: ' + data);
                        })
                    })
                })
            })
        }
    })
})