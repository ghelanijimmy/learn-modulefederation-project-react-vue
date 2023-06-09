const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../package.json').dependencies;

const devConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		publicPath: 'http://localhost:8080/',
	},
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: '/index.html',
		},
		liveReload: true,
		watchFiles: [
			path.resolve(__dirname, '..', '..', 'auth'),
			path.resolve(__dirname, '..', '..', 'dashboard'),
			path.resolve(__dirname, '..', '..', 'marketing'),
		],
		open: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				marketing: 'marketing@http://localhost:8081/remoteEntry.js',
				auth: 'auth@http://localhost:8082/remoteEntry.js',
				dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
			},
			shared: {
				...deps,
			},
		}),
	],
};

module.exports = merge(common, devConfig);
