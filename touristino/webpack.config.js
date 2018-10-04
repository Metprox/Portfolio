"use strict";

const 	path 	= require('path'),
		webpack = require('webpack');

module.exports = {

    output: { filename: 'bundle.js' },

    // devtool: "cheap-inline-module-source-map",
    
    module : {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader : 'babel-loader',
                options : {
                  presets : 'env'
                }
              }
            }   
        ]
    },
    
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
    ]
}