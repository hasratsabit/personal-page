
module.exports = {
  entry: {
    app: "./app/assets/scripts/app.js",
    vendor: "./app/assets/scripts/vendor.js"
  },
  output: {
    path: "./app/temp/scripts",
    filename: "[name].js" // This keeps the name of file dynamic. (vendor)
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
