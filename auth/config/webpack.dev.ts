const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../package.json').dependencies;

const devConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		publicPath: 'http://localhost:8082/',
	},
	devServer: {
		port: 8082,
		historyApiFallback: {
			index: '/index.html',
		},
		liveReload: true,
		devMiddleware: {
			writeToDisk: true,
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'auth',
			filename: 'remoteEntry.js',
			exposes: {
				'./AuthApp': './src/bootstrap',
			},
			shared: {
				...deps,
			},
		}),
	],
};

module.exports = merge(common, devConfig);
