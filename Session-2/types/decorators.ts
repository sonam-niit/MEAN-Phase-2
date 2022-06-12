enum ValidationType
{
    NotNull
}

function validate(...types:ValidationType[]){

    return function(target:any,propertyKey:string)
    {
        //later
    }
}