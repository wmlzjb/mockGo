const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist/web');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
    entry: [
        path.join(__dirname, '/src/web/app.tsx'),
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};

module.exports = config;