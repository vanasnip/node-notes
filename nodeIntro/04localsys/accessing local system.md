#Accessing the local system
##Outline

* Node's 'process' object
* Interacting with the file system
* Buffers
* The os module

##The 'Process' object
*doesnt need to be required

*A collection of streams
**process.stdin
**process.stdout
**process.stderr

##Attributes of the current process
*process.env
*process.argv
*process.pid
*process.title
*process.uptime()
*process.memoryUsage()
*process.cwd()
...etc.

##Process-related actions
functions that act on the current running process
*process.abort()
*process.chdir()
*process.kill()
*process.setgid()
*process.setuid()
...etc.

##The Process Object is an istance of the EventEmitter
event:'exit'
event:'uncaughtException'
POISX signal events ('SIGINT', etc.)
