var config = require('../config');
var gulp = require("gulp");

gulp.task("images", function() {
    return gulp.src(config.source.assets.images)
        .pipe(gulp.dest(config.dest.images));
});
