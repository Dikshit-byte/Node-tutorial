                          // Node.js Web Server

// To access web pages of any web application, you need a web server. The web server will handle all the http requests for the web application

// e.g IIS is a web server for ASP.NET web applications and APACHE is a web server for PHP or Java web applications.

// Node.js provides capabilities to create your own web server which will handle  HTTP requests asynchronously. You can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server






// The http.createServer() method includes request and response parameters which is supplied by Node.js

// The request object can be used to get information about the current HTTP request
//e.g., url, request header, and data.

// The response object can be used to send a response for a current HTTP

// If the response from the HTTP server is supposed to be displayed as HTTP
// you should include an HTTP header with the correct content type:


const http = require('http');
 
const server = http.createServer((request,response)=>{
    // console.log(request.url);
    if(request.url == "/"){
    response.end("Hello from the other sides, Dikshit Singh");
    }else if(request.url == '/about'){
    response.end("Hello from the About sides, Rohit");
    }else if(request.url == '/contact'){
        //response.end("Hello from the Contact sides, Rohit");
        // another method 
        response.write("Hello from the Contact sides, Rohit")
        }else{
            response.writeHead(404,{"Content-type":"text/html"});
            response.end("<h1>404 error pages. Page doesn't exist </h1>"); //Here he give 200 successful code 
        }
});
// >> Here we put response to tell others

// But how we know that request has been made by the user

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port no. 8000")
});

// >> Please checkout more about HTTP error codes on google, it's really important