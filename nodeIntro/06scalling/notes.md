#Scaling Node applications

##Creating Child Processes

The 'child_process' module provides several way to invoke a process

1. spawn(command, [args], [options])
    - launches a new process with "command" and "args"
    - Returns a ChildProcess object that ...
        is an EventEmitter and emits "exit", and "close" events
        has streams for stdin, stdout and stderr that can be piped to/from
        The parent / spawning process can pipe data to and from these streams

2. exec(command, [options], callback)
    - Runs "command" string in a shell
    - Callback is invoked on process completion with error, stdout, stderr

3. execFile(file, [args],[options], [callback])
    - Similar to "exec", except "file" is executed directly, rather than in a subshell


##fork()'ing additional Node processes
A specialised version of the spawn function
There is one more way to invoke a child process in Node and is particularly optimised to do this:

4. fork(modulePath, [args], [options])
    - A special version of "spawn" especially for creating Node processes
    - Add a "send" function and "message" event to ChildProcess
    this is to facilitate message passing between the parent and child processes

eg 
```javascript
var cp = require('child_process');
var n = cp.fork(__dirname + '/child.js');
n.on('message', function(m) {
    console.log('Parent for message:', m);
});
n.send({hello: 'world'});
```

##Scaling with Node's "cluster' module

-An experimental module leveraging child_prcess.fork()
-Introduces a "Worker" class as well as master function and events



