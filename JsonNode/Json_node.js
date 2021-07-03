// JSON stands for JavaScript Object Notation.
// JSON is a lightweight format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.

const fs = require("fs");
const bioData ={
    name: "Dikshit",
    age: 26,
    channel: "Dikshit singh",
};

// // >> If we want to convert it to JSON then see this two important methods...

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// // >> Here we have to use stringfy only when we have to convert object into string and here we can't call a particular object like jsonData.channel --> undefined

// // >> Now if we have to convert json into backstage of object

// const objData = JSON.parse(jsonData);
// console.log(objData);


// now  see  what next

// 1 convert to JSON
// 2 dusre file me add krdena
// 3 readfile
// 4 again convert back to js obj ori
// 5 console.log

const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log("done");
})

fs.readFile("json1.json",'utf-8',(err,data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});