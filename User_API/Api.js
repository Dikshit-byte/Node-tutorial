const http = require('http');
const fs = require("fs");

// const server = http.createServer((req,res)=>{
//     if(req.url == "/userapi"){
//         fs.readFile(`${__dirname}/user_api.json`,"utf-8",(err,data)=>{
//             if(err){
//                 return console.log(err);
//             }
//             console.log(data);
//         })
//         res.end("Hello from the UserApi sides");
//     }
//     else{
//         res.writeHead(404,{"Content-type":"text/html"});
//         res.end("<h1> 404 error pages. Page doesn't exist </h1>");
//     }
// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("Listening to the port no 8000");
// });

// >> Here's a problem that we can get data only in our terminal but if we want to access throught nodemon then we have to put our (res.end) inside our function like that




// const server = http.createServer((req,res)=>{
//     if(req.url == "/userapi"){
//         fs.readFile(`${__dirname}/user_api.json`,"utf-8",(err,data)=>{
//             if(err){
//                 return console.log(err);
//             }
//             console.log(data);
//             res.end(data);
//         })
        
//     }
//     else{
//         res.writeHead(404,{"Content-type":"text/html"});
//         res.end("<h1> 404 error pages. Page doesn't exist </h1>");
//     }
// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("Listening to the port no 8000");
// });



//>> Now if we want to get one data at a time then we can do it because as we know that we have parse method in nodejs as we learn it in json video then just dive into it to get some more useful information




// const server = http.createServer((req,res)=>{
//     if(req.url == "/userapi"){
//         fs.readFile(`${__dirname}/user_api.json`,"utf-8",(err,data)=>{
//             if(err){
//                 return console.log(err);
//             }
//             console.log(data);
//             const objData = JSON.parse(data);
//                 res.end(objData.name);
//         })
        
//     }
//     else{
//         res.writeHead(404,{"Content-type":"text/html"});
//         res.end("<h1> 404 error pages. Page doesn't exist </h1>");
//     }
// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("Listening to the port no 8000");
// });



//>> Now if we have to get API data for only one time


const server = http.createServer((req,res)=>{
    const data = fs.readFileSync(`${__dirname}/user_api.json`,'utf-8');
    const objData = JSON.parse(data);
    if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/user_api.json`,"utf-8",(err,data)=>{
            if(err){
                return console.log(err);
            }
            res.writeHead(200,{"content-type": "application/json"});
            res.end(objData.name);
        })
        
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1> 404 error pages. Page doesn't exist </h1>");
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port no 8000");
});
