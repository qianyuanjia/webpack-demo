const cleanWebpackPlugin=require('clean-webpack-plugin')
const htmlWebpackPlugin=require('html-webpack-plugin')
const webpack=require('webpack')
const path=require('path')
const isDev=process.env.NODE_ENV==='development'
const config={
    target:'web',
    entry:path.join(__dirname,'src/app.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader?importLoaders=1',
                    {
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins:[
                                require('autoprefixer')({
                                    browsers:['last 5 versions']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name]-[hash:5].[ext]'
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins:[
        new cleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDev?'"development"':'"production"'
            }
        }),
        new htmlWebpackPlugin()
    ]
}

if(isDev){
    config.devtool='#cheap-module-eval-source-map',
    config.devServer={
        port:8000,
        host:'0.0.0.0',
        overlay:{
            errors:true
        },
        open:true,
        hot:true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports=config
