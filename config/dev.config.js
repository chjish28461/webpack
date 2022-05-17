const { merge } = require('webpack-merge');
const common = require('./webpack.commom');

module.exports = merge(common,{
    mode:"development"
})