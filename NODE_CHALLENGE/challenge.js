                    // CHALLENGE TIME(CRUD Operations)

// 1. Create a folder named it Dikshit
const fs = require('fs');
// fs.mkdirSync("Dikshit");

// 2. Create a file in it named bio.txt and data into it
fs.writeFileSync('Dikshit/bio.txt',"My name is Dikshit singh");

// 3. Add more data into the file at the end of the existing data 
fs.appendFileSync('Dikshit/bio.txt',"\r\nThis is another dikshit singh from punjab");

// 4. Read the data without getting the buffer data at first
// File encoding
// const org_data = fs.readFileSync("Dikshit/bio.txt").toString();
// console.log(org_data);
// But try to do in manner with encoding 
const org_data = fs.readFileSync("Dikshit/bio.txt","utf8");
console.log(org_data);

// 5. Rename the file name to mybio.txt
fs.renameSync('Dikshit/BIO.txt','Dikshit/mybio.txt');

// 6. Now delete both the file and the folder
fs.unlinkSync('Dikshit/mybio.txt');
fs.rmdirSync('Dikshit');
// >>>CRUD
//  create 
//  read 
//  update
//  delete



fs.fil