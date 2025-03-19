// commonJs
const pathNode = require('node:path');
module.exports = {
    // este es el default
    // entry: './src/index.js'

    output: {
        // path: '/Users/nicolasguerrero/Documents/workspace/DEVF/Frontend/bundlers/webpack/build'
        path: pathNode.resolve(__dirname, 'build2')
    }
}