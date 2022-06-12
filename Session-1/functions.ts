function valid(age:number) : boolean{
    return age>=18;
}

//boolean is a return type of function
//age is a parameter o function
//function will check the age and return wether it is valid or not

//call function
console.log("Check age 25 "+ valid(25));
console.log("Check age 15 "+ valid(15))