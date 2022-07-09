var url= require('url');
var urlLocation="http://localhost:8080/xyz.html?year=2022&month=july";

var q= url.parse(urlLocation,true);
console.log(q.host);
console.log(q.port);
console.log(q.search);
console.log(q.query.month);
console.log(q.query.year);