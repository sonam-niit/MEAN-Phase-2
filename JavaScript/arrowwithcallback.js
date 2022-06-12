var add= (a,b) => a+b;
var mul= (a,b) => a*b;

var data = (callback) => callback(10,20);

console.log(data(add));
console.log(data(mul));

//function return function
var sub = (a) =>  (b) => a-b;
var div = (a) =>  (b) => a/b;

console.log(sub(10)(20));
console.log(div(10)(20));

