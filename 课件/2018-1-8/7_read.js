const http = require('http');
const fs = require('fs');

const u = 'www';  //www/index.html
http.createServer((req,res)=>{
    // console.log(req.url);
    let url = u + req.url;

    fs.readFile(url,(error,data)=>{
        if(error){
            res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
            res.write('404');
            // res.end();
        }else{
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            res.write(data.toString());
            // res.end();
        }
        res.end();
    });
}).listen(90);
