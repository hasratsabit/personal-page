var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');
var svg2png = require('gulp-svg2png');

var config = {
  shape: {
    spacing: {
      padding: 0
    }
  },
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
})

// This task creates sprite svg icons
gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
})

// This copies the sprite css file from bundle temp folder to the assets foler for use
gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

// This deletes the sprite folder after it is passed to the moudules.
gulp.task('endClean', ['copySpriteCSS', 'copySpriteGraphic'], function() {
  return del('./app/temp/sprite');
});

// Automates all the tasks
gulp.task('icons', ['beginClean','createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
