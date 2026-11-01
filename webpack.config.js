import path from 'path';
import { fileURLToPath } from 'url';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        clean: true,
        filename: 'index.js',
        publicPath: '/news-JS/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            'process.env.API_URL': JSON.stringify(process.env.API_URL),
            'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
        }),
    ],
};

export default async ({ mode }) => {
    const isProductionMode = mode === 'production';
    const envConfigModule = isProductionMode
        ? await import('./webpack.prod.config.js')
        : await import('./webpack.dev.config.js');

    return merge(baseConfig, envConfigModule.default);
};
