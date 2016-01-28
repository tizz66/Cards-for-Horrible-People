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
    devServer: {
        hot: true,
    },
	module: {
		loaders: [
            {
			  test: /\.js$/,
			  loader: 'react-hot',
			  include: path.join(__dirname, 'client')
			},
            {
			  test: /\.js$/,
			  loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                cacheDirectory: true,
                plugins: ['transform-decorators-legacy'],
                presets: ['es2015', 'react', 'stage-0']
              }
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
