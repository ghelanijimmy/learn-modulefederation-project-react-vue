const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../package.json').dependencies;

const devConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		publicPath: 'http://localhost:8083/',
	},
	devServer: {
		port: 8083,
		historyApiFallback: {
			index: '/index.html',
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		liveReload: true,
		devMiddleware: {
			writeToDisk: true,
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'dashboard',
			filename: 'remoteEntry.js',
			exposes: {
				'./DashboardApp': './src/bootstrap',
			},
			shared: {
				...deps,
			},
		}),
	],
};

module.exports = merge(common, devConfig);
