function sum(...num)
{
    var total=0;
    for(let x of num)
    {
        total=total+x;
    }
    console.log("Sum is "+total)
}

sum(1,2,3);
sum(3,4,5,6,7,8,9);
sum(10,20,30,40,50,60,70,80,90);