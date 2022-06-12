//function simple
function print() {
    console.log("Hello World");
}
//function return value
function greeting() {
    return "Good Morning"
}
//function with parameter
function add(a, b) {
    return a + b;
}
function fullName(fname, lname) {
    console.log("Full Name: " + fname + " " + lname);
}

print();
fullName("sonam","soni");
var message= greeting();
console.log("Returned Value is "+ message);
//directly call function from console and print values which is returned by function
console.log("Function caling "+ add(23,34));