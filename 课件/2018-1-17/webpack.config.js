const path = require('path');
const Html = require('html-webpack-plugin');
const Css = require('extract-text-webpack-plugin');
const Open = require('open-browser-webpack-plugin');
const wk = require('webpack');

let C = new Css({
    filename:'[name].css',
    // disable: true
});
module.exports = {
    entry:{
        app:'./app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                // 'babel-loader'
            },
            {
                test: /\.css$/,
                use: 
                // [
                //     { loader: "style-loader" },
                //     { loader: "css-loader" }
                // ]
                Css.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
               
            }
        ]
    },
    plugins:[
        C,
        new Html({
            filename:'1.html',
            template:'./index.html'
        }),
        // new Open({ url: 'http://localhost:3000' }),
        // new wk.HotModuleReplacementPlugin()
    ],
    // devServer:{
    //     hot:true,
    //     contentBase:path.resolve(__dirname),
    //     publicPath:'/',
    //     port:3000
    // }
}
