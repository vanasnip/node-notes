#Stream in Node

- streams are instances of (and extensions of) EventEmitter with and agreed upon interface
- a stream is an instance of either ReadableStream, WritableStream or Both
- ReadableStream can be pipe()'d to a WritableStream

---

##ReadableStream

- readable [boolean] // whether or not a stream is readable

###A series of events emited when new data arrives or when there is no more data
- event:'data'
- event:'end'
- event:'error'
- event:'close'

###A series of function to:
- pause()
- resume()
- destroy()
- pipe()
the stream 

---

##WritableStream

- writable [boolean] // whether or not a stream is writable

###A series of events that are emited like
- event:'drain' // when it is safe to write to the stream

###A series of function to:
- write()
- end()
- destroy()
- destroySoon()
the stream 