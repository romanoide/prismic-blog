const HtmlWebpackPlugin = require('html-webpack-plugin'),
OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
ExtractTextPlugin = require("extract-text-webpack-plugin")

let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
})


module.exports ={
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				include:__dirname+'/app', 
				loader: "babel-loader",
				query: {
		        	presets: ['es2015', 'react']
		        }
			},
			{
		        test: /\.css$/,
		        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
		    }
		]
	},
	plugins:[
	HtmlWebpackPluginConfig,
	new ExtractTextPlugin('css/styles.css'),
	new OptimizeCssAssetsPlugin({
			cssProcessorOptions: { discardComments: { removeAll: true } }
		})
	]
	
}
