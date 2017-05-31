var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool:"source-map",
	entry:{
		index:"./es6/index.js"
	},
	output:{
		path:"./build_es6/",
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:["style","csss"],
				exclude:"/node_modules/"
			},
			{
				test:/\.jsx?$/,
				loaders:["react-hot","babel?presets[]=es2015&presets[]=react"],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"es6")
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
		new htmlWebpackPlugin({
			title:"es6 test",
			chunks:["index"]
		})
	]
}