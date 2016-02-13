module.exports = {
	entry: './index.js',
	output: {
		path: __dirname + '/',
		publicPath: 'build/',
		filename: 'build.js'
	},
	module: {
		loaders: [
			{test: /\.vue$/, loader: 'vue'}
		]
	}
}
