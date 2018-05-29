const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const swig = require('swig');
app.set('views', __dirname+'/www');

app.set('view engine', 'html');

app.engine('html', swig.renderFile);

swig.setDefaults({ cache: false });
/*
    
    /user/add   post
        注册
    /user/login post
        登录
    /user/book  get 

    /user/book/mm/yy

    /user

        -> /login
            ....
        -> /add
            ...
*/  


app.use('/user',require('./user/changeUser'));

app.listen(88);

app.get('/',function(req,res){
    res.render('index',{
        title:'呵呵'
    });
});
// app.use(express.static('www'));

