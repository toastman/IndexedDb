/**
 * Created by andriivandakurov on 7/31/14.
 */
var gulp    = require("gulp"),
    uglify  = require("gulp-uglifyjs");

gulp.task("uglify-js", function () {
  gulp.src('./src/**/*.js')
    .pipe(uglify({
      outSourceMap:true
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['uglify-js']);