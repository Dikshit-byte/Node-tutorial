                            // Node.js Streams

/*
>>Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams-
                                OR

Streaming means listening to music or watching video in 'real time', instead of  downloading a file to your computer and watching it localStorage


>> Readable - Stream which is used for read operation.
>> Writable - Stream which is used for write operation.
>> Duplex - Stream which is used for both read and write operation.
>> Transform - A type of duplex stream where the output is computed based on input.

*/



/*
Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are-

data - This event is fired when there is data is available to ReadableStream.toString
end - This event is fired when there is no more data is read.
error - This event is fires when there is any error receiving or writing data.
finish - This event is fired when all the data has been flushed to underlying system.
*/


// const fs = require('fs');
// const http = require('http');

// const server = http.createServer();

// server.on('request',(req,res)=>{
//     // var fs = require('fs');
//     fs.readFile('input.txt',(err,data)=>{
//         if(err) return console.log(err);
//         res.end(data.toString());
//     });
// });
// server.listen(8000, "127.0.0.1",()=>{
//     console.log("Listening to the port 8000");
// })
// >> Here still we read file in one time but not with the purpose of streaming



                            // 2ND WAY
// Reading from a Stream
// Create a readable stream
// Handle stream events --> data, end, and error 

// const fs = require('fs');
// const http = require('http');

// const server = http.createServer();

// server.on('request',(req,res)=>{
//   const rstream = fs.createReadStream("inpt.txt");
//   rstream.on('data',(chunkdata)=>{
//     res.write(chunkdata);
//   })
//   rstream.on('end',()=>{
//       res.end();
//   });
//   rstream.on('error',(err)=>{
//       console.log(err);
//       res.end("file not found");
//   })
// });
// server.listen(8000, "127.0.0.1",()=>{
//     console.log("Listening to the port 8000");
// })