const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-env',
                '@babel/preset-typescript'
              ],
              plugins: [
                this.mode === 'development' && 'react-refresh/babel'
              ].filter(Boolean)
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
};
