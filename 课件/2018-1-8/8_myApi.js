const http = require('http');
const fs = require('fs');

const sql = ['liulian','90-ING','duxing','siyue','jiangshang','tz'];
const u = 'www';

/*
    /index.html  -> 静态资源

    /user?name=榴莲
*/
http.createServer((req,res)=>{
    // console.log(req.url);
   
    let reqUrl = req.url;
    let str = reqUrl.split('?');
    let obj = {
        code:0,
        msg:'有这个用户'
    }

    if(str[0] === '/user'){ //请求接口
        let username = str[1].split('=')[1];
        if(!sql.includes(username)){ //有用户
            obj.code = 1;
            obj.msg = '没有这个用户';
        }
        // console.log(obj);
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
        res.write(JSON.stringify(obj));
        res.end();

    }else{

        let url = u + reqUrl;
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

    }



   
}).listen(90);
