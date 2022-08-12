const path = require('path');

module.exports = {
  entry: './src/index.js',
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env"
            ],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  "corejs": 3,
                  "version": "^7.18.9"
                }
              ],
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};

