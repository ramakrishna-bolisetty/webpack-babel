const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    mode:'development',
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    
                },
            }
        },{

            test: /\.(png|svg|jpg|jpeg|gif|jfif)$/i,
            type: 'asset/resource',

        },
        ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
      filename: "index.html",
      template: 'src/template.html',
    }),
  ],
};
