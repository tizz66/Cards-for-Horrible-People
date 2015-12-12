var path = require('path');
var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({  
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
	devtool: 'eval',
	entry: [
      'webpack-hot-middleware/client',
      './client/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),
	    devFlagPlugin
    ],
	module: {
		loaders: [
			{
			  test: /\.js$/,
			  loaders: ['react-hot', 'babel'],
			  include: path.join(__dirname, 'client')
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{
				test: /\.(png|svg)$/,
				loader: 'url??mimetype=image/png'
			}
		]
	}
};