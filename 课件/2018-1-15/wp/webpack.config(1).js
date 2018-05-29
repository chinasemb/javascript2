const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:'./app',
    output:{
        filename:'index2.js',
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
    }
}