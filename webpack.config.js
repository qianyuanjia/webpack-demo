const htmlWebpackPlugin=require('html-webpack-plugin')
const path=require('path')
module.exports={
    entry:{
      main:path.join(__dirname,'src/index.js'),
      a:path.join(__dirname,'src/a.js'),
      b:path.join(__dirname,'src/b.js'),
      c:path.join(__dirname,'src/c.js'),
    },
    output:{
      filename:'js/[name]-[chunkhash:8].js',
      publicPath:'https://cdn.com/',
        path:path.join(__dirname,'dist')
    },
  plugins:[
    new htmlWebpackPlugin({
      filename:'a.html',
      inject:false,
     chunks:['main','a'], 
     title:"test a",
     template:path.join(__dirname,'index.html')
    }),
    new htmlWebpackPlugin({
      filename:'b.html',
     chunks:['main','b'], 
      inject:false,
     title:"test b",
     template:path.join(__dirname,'index.html')
    }),
    new htmlWebpackPlugin({
      filename:'c.html',
      inject:false,
      excludeChunks:['a','b'],
     title:"test c",
     template:path.join(__dirname,'index.html')
    }),
  ]
}
