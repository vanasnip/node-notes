#Testing and Debugging

Basic testing with Node's built-in "assert" module
More advanced testing with mocha and should

##The "assert" module
You can test for:

Test for (in)equality between expected and actual values
Test whether a block of code throws (or does not throw) and exception
Test for the "truthiness" of a value
The whether the "error" parameter was passed to callback
Each assertion can contain a message to output on failure

###Types of equality
Three different types of equality

1. assert.equal(): shallow, coercive equality, as determined by ==
2. assert.strict(): strict equality, as determined by ===
3. assert.deepEqual():
    - Identical values are equal(===)
    - values that are not objects (typeof"object") are determined by ==
    - Date objects are equal if both refer to the same date/time
    - Other objects (including Arrays) are equal if they have the same number of owned properties, equivalent values for every key and an identical "prototype";

