class Student {
    constructor(rollNo, fname, lname) {
        this.rollNo = rollNo;
        this.fname = fname;
        this.lname = lname;
    }
    display() {
        console.log("Roll No: " + this.rollNo);
        console.log("First Name: " + this.fname);
        console.log("Last Name: " + this.lname);
    }
}
//creating objects of Student class
var s1 = new Student(12, "sonam", "soni");
var s2 = new Student(23, "Vikas", "digilla");
s1.display();
s2.display();