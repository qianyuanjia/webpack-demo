const htmlWebpackPlugin=require('html-webpack-plugin')
const path=require('path')
module.exports={
    entry:{
      main:path.join(__dirname,'src/index.js'),
      a:path.join(__dirname,'src/a.js')
    },
    output:{
      filename:'js/[name]-[chunkhash:8].js',
      publicPath:'https://cdn.com/',
        path:path.join(__dirname,'dist')
    },
  plugins:[
    new htmlWebpackPlugin({
      filename:'index-[hash].html',
      inject:false,
      date:'<!--'+new Date()+'-->',
      minify:{
        collapseWhitespace:true,
        removeComments:true
      },
      template:path.join(__dirname,'index.html')
    })
  ]
}
