const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main',
        path: path.resolve(__dirname, 'main')
    },
    mode: 'development'
}