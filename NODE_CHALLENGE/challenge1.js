const fs = require('fs');

                                // CHALLENGE TIME

// 1. Create a folder named it Dikshit
// fs.mkdir('Dikshit',(err)=>{

// })

// 2. Create a file in it named bio.txt and data into it.
// fs.writeFile('Dikshit/bio.txt','It\'s dikshit singh this side from punjab',(err)=>{

// })

// 3. Add more data into the file at the end of the existing data.
// fs.appendFile('Dikshit/bio.txt','\r\n And one more thing, I want to tell you is nothing',(err)=>{

// })

// // 4. Read the data without getting the buffer data at first.Create
//  File ENCODING
// fs.readFile('Dikshit/bio.txt','utf8',(err,data)=>{
//     console.log(data);
// })
// 5. Rename the file name to mybio.txt
    // fs.rename('Dikshit/bio.txt','Dikshit/mybio.txt',(err)=>{
    //     })
// 6. Now delete both the file and the folder
fs.unlink('Dikshit/mybio.txt',(err)=>{
})
fs.rmdir('Dikshit',(err)=>{
})
