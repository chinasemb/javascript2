const path = require('path');
const webpack = require('webpack');
const Html = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            }
        ]
    },
    plugins:[
        new Html({
            filename:'index.html',
            template:'./index.html'
        })
    ]
}