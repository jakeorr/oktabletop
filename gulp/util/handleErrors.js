var notify = require('gulp-notify');

module.exports = function () {
  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message + error.stack %>'
  }).apply(this, arguments);
};
