var config = require('../config');
var gulp = require("gulp");
var concat = require("gulp-concat");
var tsc = require("gulp-typescript");
var tsProject = tsc.createProject('tsconfig.json');
var directories = require("../util/list-directories");

var modules = directories(config.source.module).map(function(module){
	return "js/" + module + ".min.js";
});

gulp.task("index", ["index-app"], function() {
    return gulp.src(config.source.root + "index.html")
        .pipe(gulp.dest(config.dest.root));
});

gulp.task("index-app", function() {
    return gulp.src(config.source.root + "*.ts")
    	.pipe(tsc(tsProject))
        .pipe(gulp.dest(config.dest.js));
});