

//cube returning prin function
function cube(n) {
    return function test() {
        return n*n*n;
    }
}

var result= cube(5);
console.log("Cube of 5 is "+ result());