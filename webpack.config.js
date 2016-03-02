(() => {
'use strict';

// imported modules
var WEBPACK = require('webpack');
var WEBPACK_COPY = require('copy-webpack-plugin');
var WEBPACK_HTML = require('html-webpack-plugin');

var DIST_DIR = __dirname + '/dist';
var PUBLIC_DIR = __dirname + '/public';

module.exports = makeConfig();

function makeConfig() {
  // webpack configuration
  var config = { };

  config.resolveLoader = {
    root: __dirname + '/node_modules',
  };

  // set the application entry point
  config.entry = {
    app: __dirname + '/index.js',
  };


  // define the output, empty if test
  config.output  = {
    path: DIST_DIR,
    publicPath: DIST_DIR,
    filename: '[name].demo.js',
    chunkFilename: '[name].demo.js',
  };

  // define the sourcemapping - chrome works best with inline source maps
  // when being served from the webpack dev server
  config.devtool = 'inline-source-map';

  config.module = {
    preLoaders: [ ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'raw',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw',
      },
    ]
  };

  config.plugins = [
      new WEBPACK_HTML({
        template: PUBLIC_DIR + '/index.html',
        inject: 'body',
      }),
      new WEBPACK.NoErrorsPlugin(),
      new WEBPACK.optimize.DedupePlugin(),
      new WEBPACK_COPY([{ from: PUBLIC_DIR + '/index.html' }]),
    ];


  return config;
}

})();
