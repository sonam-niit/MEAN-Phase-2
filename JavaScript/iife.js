(function (){
    console.log("This is my IIFE function");
}) ();

const empId = (function(){
    let count=0;
    return function(){
        ++count;
        return "emp"+count;
    }
})();

console.log("Employee List");
console.log("Sonam "+ empId());
console.log("Parth "+ empId());
console.log("Nikunj "+ empId());

