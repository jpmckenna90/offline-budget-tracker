const config = {
  entry: "./Develop/public/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: "development"
};

module.exports = config;