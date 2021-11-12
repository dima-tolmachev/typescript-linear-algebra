const path = require('path');

module.exports = {
    entry: './src/lats.ts',
    devtool: 'inline-source-map',
    mode: 'production',
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
        library: 'lats',
        filename: 'lats.js',
        path: path.resolve(__dirname, 'dist')
    }
};