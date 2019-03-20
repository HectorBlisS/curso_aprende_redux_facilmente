let path = require("path");

module.exports = {
  entry: "./main.js",
  mode: "production",
  output: {
    path: path.join(__dirname, "build"),
    filename: "fixter.js"
  }
};
