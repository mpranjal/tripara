
var webpack = require('webpack');

module.exports = {
  entry:  "./app/assets/scripts/App.js",
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "App.js"
  }
};