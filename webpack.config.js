const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssGlobalImport = require('postcss-global-import');
//const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: {
            lodash: 'lodash-es',
            config$: path.resolve(__dirname, 'src/config/config.json'),
            Config: path.resolve(__dirname, 'src/config'),
            Util: path.resolve(__dirname, 'src/util'),
            Images: path.resolve(__dirname, 'src/assets/images'),
            Fonts: path.resolve(__dirname, 'src/assets/fonts'),
            Common: path.resolve(__dirname, 'src/components/Common'),
        },
    },
    devtool: 'source-map', // more info:https://webpack.js.org/guides/development/#using-source-maps and https://webpack.js.org/configuration/devtool/
    entry: [
        // must be first entry to properly set public path
        './src/webpack-public-path',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
    ],
    target: 'web',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        //new HardSourceWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
            template: 'src/index.ejs',
            favicon: 'src/assets/favicon.ico',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/octet-stream'
                        }
                    }
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'image/svg+xml'
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer,
                                postcssGlobalImport,
                            ],
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [ path.resolve(__dirname, 'src/styles/variables/**/*') ]
                        },
                    },
                ]
            }
        ]
    },

};
