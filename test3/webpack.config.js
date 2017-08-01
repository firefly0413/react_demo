var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	devtools:"source-map",
	entry:{
		index:"./react/index.jsx",
		vendors:["react","react-dom","redux","react-redux"]
	},
	output:{
		path:"./build_react/",
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
    colors: true,
		inline:true
	},
	resolve:{
		extensions:["",".js",".css",".jsx"]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new htmlWebpackPlugin({
			title:"react test",
			chunks:["index","vendors"]
		}),
    //new ExtractTextPlugin("styles.css"),
		new webpack.BannerPlugin("Copyright Firefly inc.")
	]
}