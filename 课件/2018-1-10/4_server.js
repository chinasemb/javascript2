const http = require('http');
const fs = require('fs');
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
        let arr = url.split('?')[1].split('&');
        let act = arr.find(e=>e.includes('act')).split('=')[1];
        let username = arr.find(e=>e.includes('username')).split('=')[1];
        let password = arr.find(e=>e.includes('password')).split('=')[1];
        let obj = {
            code:0,
            msg:'成功'
        }
        switch(act){
            case 'add':
                //注册
                /*
                    1.有没有这个人
                        有 -> 用户名已经注册
                        没有 -> 添加数据到数据库
                */
                if(sql.find(e=>e.username == decodeURI(username))){
                    //用户名已经被占用
                    obj.code = 1;
                    obj.msg = '对不起,用户名已经被占用';
                }else{
                    //可以注册
                    sql.push({
                        username:decodeURI(username),
                        password
                    });
                    obj.msg = '注册成功';
                    obj.success = username;
                }
            break;
            case 'login':
                /*
                    登录:
                        有没有这个用户
                            有 -> 验证密码
                            没有 -> 去注册
                */
                let data = sql.find(e=>e.username == decodeURI(username));
                if(data){
                    if(data.password == password){
                        obj.code = 0;
                        obj.msg = '登录成功';
                    }else{
                        obj.code = 1;
                        obj.msg = '用户名或密码错误';
                    }
                }else{
                    obj.code = 2;
                    obj.msg = '没有这个用户';
                }
            break;
        }
        req.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
        req.write(JSON.stringify(obj));
        req.end();
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