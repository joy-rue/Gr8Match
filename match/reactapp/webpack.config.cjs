const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
