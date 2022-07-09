var util= require('util');
var myname="sonam";
var myresult=90;
var subject={'sub1':"JAVA",'sub2':"Node"}

var format1= util.format("My name is %s",myname);
var format2= util.format("My result is %d",myresult);
var format3= util.format("My Favorite subjects %j",subject);
console.log(format1);
console.log(format2);
console.log(format3);