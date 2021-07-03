                    // SYNCHRONOUS vs ASYNCHRONOUS

const fs = require('fs');

                        // IN SYNCHRONOUS WAY
// const output = fs.readFileSync('FS_ASYNC/read.txt', 'utf8');
// console.log(output);
// console.log("after the data");

                        // IN ASYNCHRONOUS WAY

const output1 = fs.readFile('FS_ASYNC/read.txt', 'utf8', (err,data) => {
    console.log(data);
})
console.log("after the data");
//>>> Here it takes time but this will not wait and move further.