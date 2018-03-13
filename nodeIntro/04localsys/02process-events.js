process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk){
    process.stdout.write('--> ' + chunk);
});

process.stdin.on('end', function(){
    process.stderr.write('End!\n');
});

process.on('SIGTERM', function () {
    process.stderr.write('Why are you trying to terminate me?!? :(\n');
});

console.log('Node is running as process #' + process.pid);