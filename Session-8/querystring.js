var qs= require('querystring');

var q=qs.parse('year=2022&month=july');
console.log(q.year);
console.log(q.month);