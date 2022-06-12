
//3 parameters are local you can't access them out side
function Employee(name, designation,yearOfBirth)
{
    this.name= name;
    this.designation= designation;
    this.yearOfBirth= yearOfBirth;
}

Employee.prototype.calculateAge = function(){
    console.log("Age of "+this.name +" "+ (2022- this.yearOfBirth))
}
//Let's create Object using this functional constructor

let e1= new Employee("Sonam","Senior Trainer",1991);
console.log(e1);
console.log("Designation "+e1.designation);
e1.calculateAge();

let e2= new Employee("Test","Test Engineer",1990);
console.log(e1);
e2.calculateAge();

