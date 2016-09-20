var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
module.exports = {
    // current directory
    context: __dirname, 
    // no devtool if production
    devtool: debug ? "inline-sourcemap" : null, 
    // entry point
    entry: "./js/scripts.js", 
    output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
    },
    // add plugins if production
    plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // removes comments, sourcemaps, etc.
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }), 
    ], 
};