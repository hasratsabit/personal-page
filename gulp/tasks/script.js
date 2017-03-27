
var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('scripts', ['modernizr'], function(callback) {
  webpack(require('../../webpack.config.js'), function(error, stats) {
    if(error) {
      console.error(error.toString());
    } else {
      console.log(stats.toString());
    }
    callback();
  });
});
