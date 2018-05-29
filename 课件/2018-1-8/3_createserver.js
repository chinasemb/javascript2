/*
    启动服务:
        request 接收客户端的信息

        response 发送给客户端信息

        listen监听客户端的请求

        writeHead(200,数据格式)
*/

const app = require('http');

let server = app.createServer(function(request,response){
    // console.log('hehe');

    // console.log(request);

    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})

    // response.write('<h1>呵呵</h1>');


    response.write('{"code":0,"msg":"成功"}');
    response.end();

});

server.listen(88);




