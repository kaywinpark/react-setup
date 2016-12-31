var path = require('path');


var config = {
   entry: './src/index.js',

   output: {
      path: path.join(__dirname, '/src'),
      publicPath: "/",
      filename: 'bundle.js'
   },

   devServer: {
      inline: true,
      contentBase: "./src",
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
