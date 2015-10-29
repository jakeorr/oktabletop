var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var path = require('path');

gulp.task('nodemon', function () {
  nodemon({
    script: path.join(__dirname, '../..', 'index.js'),
    ext: 'js html'
  });
});
