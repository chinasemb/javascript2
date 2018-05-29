const express = require('express');
const router = express.Router();
const User = require('../model/userModel');
//cookie-parser
//app.use(cookieParser())

//req.cookies.userId

//res.setHeader()


router.post('/add',function(req,res){
    let data = {};
    let json = req.body;
    User.findOne({
        username:json.username
    }).then(function(name){
        if(name){
            console.log(name);
            data.code = 1;
            data.msg = '用户名已注册';
            res.json(data);
            return;
        }
        let u = new User({
            username:json.username,
            password:json.password
        });
        return u.save();
    }).then(function(newData){
        data.code = 0;
        data.msg = '成功';
        data.id = newData._id;
        res.json(data);
    });
});

router.post('/login',function(req,res){
    
});

module.exports = router;