var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch-files', function() {
  gulp.watch('www/app/*.js',['page-reload']);
  gulp.watch('www/index.html',['page-reload']);
  gulp.watch('www/lib/*.js',['page-reload']);
  gulp.watch('www/data/*',['page-reload']);
});

gulp.task('page-reload', function() {
  browserSync.reload();
})

gulp.task('browser-sync', ['watch-files'], function() {
  browserSync.init({
      server: "www/"
  });
  browserSync.stream();
});

gulp.task('default', ['browser-sync']);
