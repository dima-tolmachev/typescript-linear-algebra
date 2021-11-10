const path = require('path');

module.exports = {
    entry: './src/tsvm.ts',
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        library: 'tsvm',
        filename: 'tsvm.js',
        path: path.resolve(__dirname, 'dist')
    }
};