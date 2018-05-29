const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({extended:true}));

server.get('/user',function(req,res){
    /*
        req,res 二次封装
    */
   
    res.send('404');
});
server.post('/user2',function(req,res){
    console.log(req.body);
});

server.use(express.static('www'));

server.listen(88);

