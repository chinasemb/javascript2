const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const mongoose = require('mongoose');

app.use('/user',require('./user/changeUser'));

mongoose.connect('mongodb://localhost:27022/test')
.then(function(error){
    if(error){
        console.log('失败');
        return;
    }
    app.listen(88);
    console.log('数据库链接成功');
});

app.use(express.static('www'));

