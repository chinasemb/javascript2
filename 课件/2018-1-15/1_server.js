const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

const swig = require('swig');
app.set('views', __dirname+'/www');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

app.use('/user',require('./user/user'));
app.use('/www',express.static('www'));
mongoose.connect('mongodb://localhost:27023/test')
.then(function(error){
    if(error){
        console.log('失败');
        return;
    }
    console.log('链接数据库成功');
    app.use('/',function(req,res){
        if(req.cookies.u){
            console.log(req.cookies.u);
            req.c = req.cookies.u || '';
        }
        res.render('index',{
            t:'hehe',
            u:req.c
        });
    });
    app.listen(90);
});

