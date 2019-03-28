const path = require(`path`)
const HtmlWebpackPlugin = require(`html-webpack-plugin`)
const CleanWebpackPlugin = require(`clean-webpack-plugin`)
const CopyWebpackPlugin = require(`copy-webpack-plugin`)
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    whms: `./src/posts/WHMS/whms.js`,
    portfolioSite: `./src/posts/portfolio-site/portfolio-site.js`
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/d-favicon.png',
      title: `Dylan's Portfolio Site`
    }),
    new CopyWebpackPlugin([
      { from: `src/copy-to-dist`, to: `./` }
    ]),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `./src/index.pug`,
      filename: `index.html`,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: `./src/posts/post.pug`,
      chunks: [`whms`],
      filename: `whms.html`,
      title: `White Horse Masonry Services`
    }),
    new HtmlWebpackPlugin({
      template: `./src/posts/post.pug`,
      chunks: [`portfolioSite`],
      filename: `portfolio-site.html`,
      title: `Dylan's Portfolio Site`
    })
  ],
  module: {
    rules: [{
      test: /\.pug$/,
      loader: `pug-loader`
    }, {
      test: /\.(jpeg|jpg|png)$/,
      loader: `responsive-loader`,
      options: {
        sizes: [300, 400, 600, 800, 1200],
        placeholder: true,
        placeholderSize: 21,
        name: `[name]-[hash].[ext]`
      }
    }, {
      test: /.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }, {
      test: /.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }, {
      test: /\.md$/,
      loader: `frontmatter-markdown-loader`
    }, {
      test: /\.mp4$/,
      loader: `file-loader?name=videos/[name].[ext]`
    }]
  }
}
