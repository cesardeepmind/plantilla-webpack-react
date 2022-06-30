const path = require('path')


// Plugins y minificadores de CSS, SCSS, SASS
// Para reducer el tamaño de las hojas de estilo de nuestro proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin') // Para el template del HTML
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //Para reducir los CSS
const { SourceMapDevToolPlugin } = require('webpack') // Para conocer el Source Map de nuestro proyecto

// Confug de puerto
const port = process.env.PORT || 3000;

// Exportar conf de webpack

module.exports = {

    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    context: path.resolve(__dirname),
    devServer:{
        port,
        inline: true,
        historyApiFallback: true
    },
    devtool: 'eval-source-map',
    modules: {
        rules: [
            // Reglas para archivos de js y jsx
            // Tienen que pasar el LINTING para poder pasar
            {
                enforce: 'pre',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use:[
                    'eslint-loader',
                    'source-map-loader'
                ]
            },
            // Reglas para archivos js y jsx
            // Reglas de BABEL y JSX
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:[
                        '@babel/env',
                        '@babel/react'
                    ]
                }
            },
            // Reglas para CSS SCSS SASS para minificarlos y cargarlos en el bundle
            {
                test: /(\.css|\.scss|\.sass)$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },

            // Reglas para los archivos de imagenes
            {
                test: /\.(png|jpe?g|gif)$/,
                use:[
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        // Template HTML
        new HtmlWebpackPlugin(
            {
                template: './index.html'
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: './css/styles.css'
            }
        ),
        new SourceMapDevToolPlugin(
            {
                filename: '[file].map'
            }
        )
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
        modules: [
            'node_modules'
        ]
    }

    
}