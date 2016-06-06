var config = require('../config');
var gulp = require("gulp");
var flatten = require("gulp-flatten");

gulp.task("fonts", function() {
    return gulp.src(config.source.assets.fonts)
        .pipe(flatten())
        .pipe(gulp.dest(config.dest.fonts));
});
