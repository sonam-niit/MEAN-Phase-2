let http = require('http');

var server= http.createServer(function(req,resp){
    //status
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write('<h1>Welcome to Node JS</h1>');
    resp.end();
});

//start server

server.listen(8080,function(){
    console.log("Server started on port number 8080");
})