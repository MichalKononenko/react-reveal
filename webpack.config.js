'use strict';

var path = require('path');
var webpack = require('webpack');
var build_directory = path.join(__dirname, 'build');

module.exports = {
    entry: './index.js',
    output: {
        path: build_directory, filename: 'bundle.min.js',
        publicPath: "/build"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /![index]\.html$/,
                loader: "url-loader?limit=10000"
            },
            {
                test: /index\.html$/, loader: "file-loader?name=index.html"
            },
            {
                test: /(\.jpe?g$)|(\.svg)|(\.png)/, loader: "url-loader"
            }
        ]
    }
};
