let array=[1,2,3,4,5,6,2,7,8,2];

class Count{
    x=25;
    count(){
        console.log(array.filter(x=>x%2 ===0).length)
    }
}
class Sum extends Count{
    sum(){
        let total=0;
        for(let i=0;i<array.length;i++){
            total=total+i;
        }
        console.log("Sum is "+total);
    }
}

let obj= new Sum();
obj.count();
obj.sum();
console.log("Property of parent class "+obj.x);