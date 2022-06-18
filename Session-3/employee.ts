export class Employee{
    private empCode:number;
    private empName:string;

    constructor(empCode:number,empName:string){
        this.empCode= empCode;
        this.empName= empName;
    }

    dispayEmployee(){
        console.log("Employee Code: "+this.empCode);
        console.log("Employee Name: "+this.empName);
    }
}