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


##What is a Buffer?

###JavaScript has difficulty dealing with binary data

###However, networking and the file system require it

###The Buffer class provides a raw memory allocation for dealing with binary data directly

###Buffers can be converted to and from strings by providing an encoding:
*ascii, utf8(defualt), utf16le, ucs2, base64, binary, hex



---

##The 'os' module

provides information about the currently running system

os.tmpDir()
os.hostname()
os.type()
os.platform()
os.arch()
os.release()

os.uptime()
os.loadavg()
os.totalmem()
os.freemem()
os.cpus()
os.networkInterfaces()
os.EOL // end of line marker


##Testing with Mocha
no uncommon to see it paired with shouldJS

Runs tests serially (both sync and async test)
Test cases are organise into test suites
Includes before(), after(), beforeEach() and afterEach() hooks
Support for pending, exclusive and inclusive tests
Captures test duration, flagging tests that are slow
Can watch a directory and re-run tests on changes
Multiple "interfaces" for writing tests (BSD, TDD, Exports, QUnit)
Multiple "reportes" for rendering test results

Asserting with should.js
Exxtends Node's "assert" module with BDD style assertions