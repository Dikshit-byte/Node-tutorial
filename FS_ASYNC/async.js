const fs = require('fs');

fs.writeFile('FS_ASYNC/read.txt',"Today is awesome day",
(err)=>{
    console.log("files is created");
    console.log(err);
});

// We pass them a function as an argument - a callback - that gets called when that task completes.
// The callback has an argument that tells you whether the operation completed successfully.
// Now we need to say what to do when fs.writeFile has completed (even if it's nothing), and start checking for errors.

fs.appendFile('FS_ASYNC/read.txt',"\r\nHI buree se !!", (err)=>{
    console.log("TASK COMPLETED!!");
})

fs.readFile('FS_ASYNC/read.txt','UTF-8', (err,data)=>{
    console.log(data);
})