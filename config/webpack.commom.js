
const path = require('path');
const HtmlPlugin = require("html-webpack-plugin")

const resolve = (dir)=>{
    return path.resolve(__dirname,dir)
}

const configs = {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        path: resolve( '../dist' ),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                include: [
                    resolve("../src")
                ],
                loader:'babel-loader',
                options: {
                    presets: ['@babel/preset-react','@babel/preset-env']
                }
            },
            // {
            //     test:/\.css$/,
            //     use:[
            //         'style-loader','css-loader?modules'
            //     ]
            // },
            {
                test: /\.scss$/,
                include: [
                    resolve("../src")
                ],
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                            // importLoaders: 1,
                        }
                    },
                    'sass-loader'
                ]
                
            }
        ]
    },
    resolve:{
        // modules:["node_modules","src"],
        extensions: [".js", ".json", ".jsx",'.tsx','.ts', ".css",'.scss','.less'],
        alias:{
            '@':resolve('../src')
        }
    },
    devServer:{
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        port: 8080
    },
    plugins:[
        new HtmlPlugin(
            {
                template:'./src/index.html',     //-------->这个文件必须指明路径
                filename:'index.html',       //将a.html打包到有打包的js文件那个目录下的b.html(并且制动引入打包的js文件)       
                minify:{
                    collapseWhitespace:false,    //移除空格
                    removeComment:true        //删除注释
                }
            }
        ),
    ]
}
module.exports = configs;