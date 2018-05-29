const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/*
   __dirname:以当前文件为基准的地址

   use引中间件
*/

app.use(bodyParser.urlencoded({extended:true}));

// app.get('/',function(req,res){
//     // console.log(req.url);
// });

app.post('/user',function(req,res){
    console.log(req.body);
});

app.use(express.static('www'));

app.listen(88);

