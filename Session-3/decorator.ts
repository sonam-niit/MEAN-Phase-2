enum ValidationType{
    NotNull
}
function validate(...types:ValidationType[]){
    return function(target:any,propertyKey:string){
        Validator2.registerValidators(target,propertyKey,types)
    }
}

class Validator2{

    private static notNullValidatorMap:Map<any,string[]> = new Map();
    //method
    static registerValidators(target:any,property:string,types:ValidationType[]){
        for(const type of types){
            if(type==ValidationType.NotNull){
                let keys:string[]=this.notNullValidatorMap.get(target);
                if(!keys){
                    keys=[];
                    this.notNullValidatorMap.set(target,keys);
                }
                keys.push(property);
            }
        }
    }

    static validate(target:any):boolean{
        let notNullProps:string[]=this.notNullValidatorMap.get(Object.getPrototypeOf(target))

        if(!notNullProps){
            return true;
        }
        let hasErrors:boolean=false;
        for(const property of notNullProps){
            let value= target[property];
            if(!value)
            {
                console.error(property+" values can not be null");
                hasErrors=true;
            }
        }
        return hasErrors;
        
    }
}

class Person{
    @validate(ValidationType.NotNull)
    name:string;

    constructor(name:string){
        this.name=name;
    }
}

let p1= new Person(null);
console.log(p1);
let x= Validator2.validate(p1);
console.log("Validation Passed? "+ !x)

let p2= new Person("Pooja");
console.log(p2);
let y= Validator2.validate(p2);
console.log("Validation Passed? "+ !y)