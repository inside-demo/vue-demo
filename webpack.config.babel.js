import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import path from 'path';

export default {
	devtool: 'eval',
	context: path.resolve(__dirname + '/src/'),
	entry: {
		app: './app.js'
	},
	output: {
		path: path.resolve(__dirname + '/docs/'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new DashboardPlugin(),
	  	new webpack.DefinePlugin({
	    	'process.env':{NODE_ENV: '"production"'}
	  	})
	],
	resolveLoader: {
		modules: [path.resolve(__dirname, "src"), 'node_modules'],
		extensions: ['.vue', '.js']
	},
	resolve: {
	  alias: {
	    'vue$': 'vue/dist/vue.esm.js'
	  }
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.vue?$/,
				loader: 'vue-loader'
			}
		]
	}
};
