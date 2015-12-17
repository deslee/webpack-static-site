var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var Clean = require('clean-webpack-plugin');

var paths = [
];

module.exports = {
    entry: {
        'main': "./main.js",
    },
    output: {
        path: "./build",
        filename: "[name].bundle.js",
        /* IMPORTANT!
         * You must compile to UMD or CommonJS
         * so it can be required in a Node context: */
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },

    plugins: [
        new Clean(['build']),
        new CopyWebpackPlugin([
            {from: './content', to: './content'}
        ]),
        new StaticSiteGeneratorPlugin('main', paths, {paths: paths})
    ]
};