const express = require('express');

const routers = express.Router();

const User = require('../model/userModel');

routers.post('/add',function(req,res){
    //console.log(req.body);
    let json = req.body;
    User.findOne({
        username:json.username
    }).then(function(name){
        if(!name){
            let u = new User({
                username:json.username
            });
            u.save();
            //设置cookie
            res.cookie('u',json.username);
            res.json({"code":0,"msg":"注册成功","user":json.username});
        }else{
            res.json({"code":1,"msg":"用户名已经被注册"});
        }
    });

});
routers.post('/out',function(req,res){
    // res.setHeader('setcookie','u=');
    res.cookie('u','');
    res.end();
});

module.exports = routers;