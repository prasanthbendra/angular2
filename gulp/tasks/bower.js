var config = require('../config');
var gulp = require("gulp");
var mainBowerFiles = require("main-bower-files");
var filter = require("gulp-filter");

var jsFilter = filter("**/*.js", { restore: true, passthrough: true });
var cssFilter = filter("**/*.css", { restore: true, passthrough: true });
var fontsFilter = filter(["**/*.eot", "**/*.svg", "**/*.ttf", "**/*.woff", "**/*.woff2"], { restore: true, passthrough: true });

gulp.task("bower", function() {
    return gulp.src(mainBowerFiles())
        .pipe(jsFilter)
        .pipe(gulp.dest(config.dest.js))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(gulp.dest(config.dest.css))
        .pipe(cssFilter.restore)
        .pipe(fontsFilter)
        .pipe(gulp.dest(config.dest.fonts));
});
