const http = require('http');

const server = http.createServer((res,req)=>{
    // console.log('hehe');
    req.write('<script>alert(1)</script>');
    req.end();
});

server.listen(88);