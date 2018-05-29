/*
    get  

    req.url
    querystring -> {}

    querystring.parse(req.url);

    post:
        let str = '';
        req.on('data',function(e,d){
            str += d; 
        });
        req.on('end',function(){
            console.log(str);
        });

    npm 
        npm install 下载的名字 -g

        -S    --save

        npm init  初始化

        npm i  下载依赖

        npm uninstall 卸载的名字

    nrm
        taobao
        cnpm

    yarn
        yarn init  初始化

    安装
        yarn add 模块名

    卸载
        yarn remove 模块名

    yarn install  安装项目的全部依赖











*/