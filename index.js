const fs = require('fs');

// Read file in form of streams
// transform them into upper case 
// again write data inside a file in form of streams

const readableStream = fs.createReadStream('./InputFile.txt', 'utf-8');
readableStream.on('data', (chunk)=>{
    console.log(chunk);
});

readableStream.on('error', (chunk)=>{
    console.log("Some error occured");
});

readableStream.on('end', (chunk)=>{
    console.log("Finished reading the file");
});



const {Transform} = require("stream");
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

upperCaseTransform.on('finish', ()=>{
    console.log("Finish transforming files");
});



const writeableStream = fs.createWriteStream('OutputFile.txt');
writeableStream.on('finish', ()=>{
    console.log("Finish writing files");
});


readableStream.pipe(upperCaseTransform).pipe(writeableStream);