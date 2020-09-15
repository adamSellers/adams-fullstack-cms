const {override} = require('customize-cra');
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
    'default-src': "'self'",
    'base-uri': "'self'",
    'object-src': "'none'",
    'script-src': ["'self'"],
    'style-src': ["'self'", "https://fonts.googleapis.com/", "data:"],
    'font-src': ["'self'", "https://fonts.gstatic.com/", "data:"],
    'img-src': ["'self'", "https://adams-scv-demo--c.documentforce.com/", "data:"]
};

function addCspHtmlWebpackPlugin(config) {
    if(process.env.NODE_ENV === 'production') {
        config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));
    }

    return config;
}

module.exports = {
    webpack: override(addCspHtmlWebpackPlugin),
};