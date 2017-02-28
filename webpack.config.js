const webpack = require('webpack');
const path = require('path');

const hrm = 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'

module.exports = {
 devtool: 'sourcemap',
 entry: [hrm, './sample/index.tsx'],
 output: {
   filename: 'bundle.js',
   path: path.join(__dirname, 'dist'),
   publicPath: '/js/',
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loaders: ['react-hot-loader', 'babel-loader', 'awesome-typescript-loader'],
       exclude: /node_modules/,
     },
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 plugins: [
        // Webpack 1.0
        //new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
};