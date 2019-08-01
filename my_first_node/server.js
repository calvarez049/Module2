// all requires will always go in the beginning of the file
const myHttp = require("http");
const PORT = 3000;

// how to get package avilable in this file and how to use it:
const myChalk = require("chalk");
console.log("This is my first node app");
console.log(myChalk.red("this text is red"));
console.log(myChalk.green("this text should be green"));

// how to create server
const server = myHttp.createServer((request,response)=>{
    console.log(`Requested URL is ${request.url}`);
    if(request.url === "/"){
        response.write("This is the data from server.js and its coolhafdskfasfkdsjfa;lskfjasd;lfkasjfj");
        response.end();
    } else if(request.url === "/PTWD"){
        response.write(`Alina
        Henry
        Anabel`);
        response.end();
    } else{
        response.write("this page does not exist");
        response.end();
    }
});

server.listen(PORT, ()=> console.log("Listening on 3000"));