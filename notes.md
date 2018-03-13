#V8 feature groups 

##Shipping, Staged, In Progress

##Shipping
Get rup and running out of the box

##Staged 
Not available out of the box but accessible with certain commandline flags to get access
--harmony will enable *Staged* features

##In Progress
Less stable but still accesible with specific flags
veiw all current in progress features in node with the following command
node --v8-options | grep "in progress"

###For all V8 features
node -p --v8-options | less

###Heap Stats
node [return]
v8.getHeapStatistics

----------------------------------------------------------------

Async events uses libuv
node will wait for v8, no matter how many callbacks
libuv is a c library, provides a thread pool to handle what can't be done asynchronously
libuv provides node with the event loop

other node dependencies
####http-parser, c-ares, OpemSSL, zlib

####http-parser
small c library for parsing http requests, both requests and responses
designed to have a very small prerequest footprint


####c-ares
enable async dns queries 

####OpemSSL
provides implementations for many cryptographic funcitons

####zlib
used for fast aync and streaming compression and decompression interfaces

----------------------------------------------------------------

##Node' CLI and REPL
to run repl - read eval print loop - just run 'node'
