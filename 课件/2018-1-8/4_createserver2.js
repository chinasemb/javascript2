const http = require('http');
let str = '/user=leo';
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    if(req.url === str){
        res.write('{"code":1,"msg":"用户名已经注册"}');
        res.end();
    }else{
        res.write('{"code":0,"msg":"注册成功"}');
        res.end();
    }
   

}).listen(90);