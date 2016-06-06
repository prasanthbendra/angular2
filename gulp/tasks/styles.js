var config = require('../config');
var gulp = require("gulp");
var flatten = require("gulp-flatten");

gulp.task("styles", function() {
    return gulp.src(config.source.assets.css)
        .pipe(flatten())
        .pipe(gulp.dest(config.dest.css));
});
