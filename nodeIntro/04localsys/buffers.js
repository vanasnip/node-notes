let x = new Buffer('Hello');

let y = new Buffer('World');


function buff(b) {
    console.log(b.toString('utf-8', 0, 2));
    console.log(b.toString());
    console.log(b.toString('base64'));
    console.log('---------------------')
}

buff(x);
buff(y);