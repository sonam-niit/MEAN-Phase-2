var str1= "Hello World";

console.log("Length "+ str1.length) // length is property of String
console.log("char at Index 3 "+ str1.charAt(3));
console.log("Strings end with World? "+ str1.endsWith("world"));
console.log("upper case: "+str1.toUpperCase());
console.log("Slice "+str1.slice(5,12));

var str2= "a,b,c,d,e,f";
console.log(str2.split(",").join("-"));
