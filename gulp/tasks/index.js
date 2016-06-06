var config = require('../config');
var gulp = require("gulp");
var concat = require("gulp-concat");
var htmlreplace = require('gulp-html-replace');
var directories = require("../util/list-directories");

var modules = directories(config.source.module).map(function(module){
	return "js/" + module + ".min.js";
});

gulp.task("index", ["index-app"], function() {
    return gulp.src(config.source.root + "index.html")
    	.pipe(htmlreplace({
    		"modules": modules
    	}))
        .pipe(gulp.dest(config.dest.root));
});

gulp.task("index-app", function() {
    return gulp.src([config.source.root + "app.js", config.source.root + "config.js"])
    	.pipe(concat("app.js"))
        .pipe(gulp.dest(config.dest.root));
});