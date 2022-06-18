class Student
{
    private _fname:string;
    private _lname:string;

    //getters and setters
    get fname():string{
        return this._fname;
    }
    get lname():string{
        return this._lname;
    }
    set fname(fname:string){
        this._fname=fname;
    }
    set lname(lname:string){
        this._lname=lname;
    }
}


var s1= new Student();
s1.fname="sonam";
s1.lname="soni"; // calling setter method

console.log(s1.fname+" "+s1.lname); //calling getter method