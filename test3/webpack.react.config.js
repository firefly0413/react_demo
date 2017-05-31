var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
module.exports = {
	devtools:"source-map",
	entry:{
		index:"./react2/index.jsx",
		vendors:["react","react-dom","redux","react-redux"]
	},
	output:{
		path:"./build_react2/",
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:["style","css"],
				exclude:"/node_modules/"
			},
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0', 'stage-1']})],
				include:path.resolve(__dirname),
				exclude: [/node_modules/,/publish/]
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000',
				exclude:"/node_modules/"
			}
		]
	},
	devServer:{
		hot:true,
		inline:true
	},
	resolve:{
		extensions:["",".js",".css",".jsx"]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new htmlWebpackPlugin({
			title:"react test2",
			chunks:["index","vendors"]
		})
	]
}