class GenericMap<T>
{
    private item: {[key:string]:T}={};

    setItem(key:string,value:T):void{
        this.item[key]=value;
    }
    getItem(key:string):T{
        return this.item[key];
    }
    clear():void{
        this.item={};
    }
    printMap():void{
        
        console.log(Object.getOwnPropertyNames(this.item).map(key => key+" "+ this.getItem(key)));
    }

}

//Let's Use this generic
const numb= new GenericMap<number>();
numb.setItem("one",1);
numb.setItem("two",2);
numb.setItem("three",3);
numb.printMap();

const text= new GenericMap<string>();
text.setItem("one","text1");
text.setItem("two","text2");
text.printMap();