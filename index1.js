// NODE m har file aapka ek module kehlaata hai

// REPL
// 1. js Extension
// 2. use variables
// 3. Multiline code
// 4. use (_) to get the last result
// 5. we can use editor mode
// To create a file write <type null>index2.js>




const fs = require("fs");

// Creating a new file
// pehle ek file dhundo jo likha hai.. agar nhii h toh create kr do..aur usme yeh data daal do
// fs.writeFileSync('read.txt',"It's Dikshit singh this side");
// Yeh override kr dega es file ko aur puraana data delete ho jaayegaa
// fs.writeFileSync('read.txt',"Welcome to Dikshit singh Arena");

// agar mujhe add krna ho toh kya  krunga
fs.appendFileSync('read.txt'," How are you ayush beta");

//ab agar hame file k andar ka data read krna ho toh 
// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

// Node.js includes an additional data type called Buffer(not available in browser's JavaScript).
// Buffer is mainly used to store binary data, while reading fromo a file or receiving packets over the network.

// like that
/* <Buffer 44 69 6b 73 68 69 74 20 73 69 6e 67 68 2c 20 57 65 6c 63 6f 6d 65 20 74 6f 20 64 69 6b 73 68 69 74 20 73 69 6e 67 68 20 6c 61 70 74 6f 70 0d 0a 48 6f ... 21 more bytes> */

// if we have to read original data apart from binary data

// org_data = buf_data.toString();
// console.log(org_data);


// To rename the file
// fs.renameSync('read.txt',"read_write.txt");



// const fs = require('fs');

// const buffData = fs.readFile('practise.txt','utf-8',(err,data)=>{
//     if(err){
//        console.log(err); 
//     }
//     console.log(data);
// });