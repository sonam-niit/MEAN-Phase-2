//Custom Error class 
class NotDivideByZero extends Error{
    constructor(){
        super("can not divide by zero")
    }
}
//throw custom error
function div(a,b){
    if(b==0)
        throw new NotDivideByZero();
    return a/b;
}
// Handle the error using try catch block
try {
    var result= div(10,0); 
    console.log("Result "+result)
} catch (error) {
    console.log("Error Ocuured "+error);
    console.log("Try after sometime")
}
