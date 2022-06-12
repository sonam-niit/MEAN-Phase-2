function loadData( callback )
{
    setTimeout(
        function()
        { 
            console.log("data loaded successfully");
            callback(); //calling a function after 2 seconds delay
        }
        , 2000);
}

function displayData()
{
    console.log("Display Data");
}

loadData( displayData );
//pass function as a parameter in another function