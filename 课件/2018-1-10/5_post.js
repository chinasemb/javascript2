const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const $ = require('jquery'); 
console.log($);
/*
    /user  接口
        1.php?user=xxx&pass=xxx
        
        注册接口
            /user?act=add&username=榴莲&password=123456
        登录接口
            /user?act=login&username=榴莲&password=123456
    静态文件

    // req.write('<script>alert(1)</script>');
    // req.end()
*/
let sql = [
    {
        username:'榴莲',
        password:123456
    },
    {
        username:'90-ING',
        password:123
    },
    {
        username:'小汪童鞋',
        password:321
    }
];

const server = http.createServer((res,req)=>{
    let url = res.url;
    //为接口
    /*
        /user?act=add&username=榴莲&password=123456
        act=login&username=榴莲&password=123456
        login:
        {
            code:0  //0:成功 1:错误 2:没有这个用户
        }

    */
    if(url.includes('/user')){
        let d = '';
        res.on('data',function(dd){
            d += dd;
        });
        res.on('end',function(){
            let json = queryString.parse(d);
            console.log(json);
        });
    }else{
        //为静态资源
        let u = 'www' + url;
        fs.readFile(u,(error,data)=>{
            if(error){
                req.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"})
                req.write('404');
            }else{
                req.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
                req.write(data.toString());
            }
            req.end();
        });
    }
});
server.listen(88);