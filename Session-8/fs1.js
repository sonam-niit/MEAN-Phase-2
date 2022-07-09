var fs= require('fs');

var data= fs.readFileSync('data.txt');

console.log(data.toString());
