const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const modeConfig = env => require(`./webpack-utils/${env}`)(env);
const addPresets = require('./webpack-utils/addPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  const js = {
    test: /\.jsx?/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    }
  };

  const ts = {
    test: /\.ts$/,
    use: 'ts-loader'
  };

  return merge(
    {
      mode,
      target: 'web',
      entry: {
        main: path.resolve(__dirname, './src/index.js')
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      resolve: {
        extensions: ['.js', '.jsx', '.css']
      },
      module: {
        rules: [js, ts]
      },
      // optimization: {
      //   splitChunks: {
      //     chunks: 'all'
      //   }
      // },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/index.html'),
          filename: 'index.html'
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    addPresets({ mode, presets })
  );
};
