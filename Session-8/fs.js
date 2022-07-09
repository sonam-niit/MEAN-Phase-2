var fs= require('fs');
fs.writeFile('data.txt','Welcome to Node FS',
(err,file)=>{
    if(err)
        console.log("Error Occured",err)
    console.log("Data Saved in file")
})

fs.readFile('data.txt',(err,data)=>{
    if(err)
    console.log("Error Occured",err)

    console.log(data.toString())
})

