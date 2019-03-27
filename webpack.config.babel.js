import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import path from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin';

export default {
	target: 'web',
	devtool: 'eval-source-map',
	context: path.resolve(__dirname + '/src/'),
	entry: {
		app: './app.js'
	},
	output: {
		path: path.resolve(__dirname + '/docs/'),
		filename: '[name].bundle.js'
	},
	devServer: {
	  contentBase: path.resolve(__dirname + '/docs/'),
	  host: '127.0.0.1',
	  port: 8888,
	  hot: true,
	  inline: true
	},
	plugins: [
		new VueLoaderPlugin(),
		new DashboardPlugin()
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
