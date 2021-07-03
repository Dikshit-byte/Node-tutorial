const os = require("os");

console.log(os.arch());

const free = os.freemem();
console.log(`${free/1024/1024/1024}`);

const total = os.totalmem();
console.log(`${total/1024/1024/1024}`);


console.log(os.hostname());
console.log(os.platform());
console.log(os.type()); 
console.log(os.release());

// NOTES : 
// window = window_NT
// linux = linux
// macOS = Darwin