// To access the exports we have to use require
const names= require('./index');
console.log(names);
require('./index2');


// using the os module and in the methods in that
const os=require('os');
const user=os.userInfo();
console.log(user);


//using path module.
const path=require('path');
console.log(path.sep);
const filepath=path.join('/index.js');
console.log(filepath);
const base=path.basename(filepath);
console.log(base)
const abs=path.resolve(__dirname,'index.js');
console.log(abs);


//using HTTp module.

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to home");
    } else if (req.url === '/about') {
        res.end('Here is our about page');
    } else {
        res.end('Page not found');
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
