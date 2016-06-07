var config = require('../config');
var gulp = require("gulp");
var concat = require("gulp-concat");
var flatten = require("gulp-flatten");
var directories = require("../util/list-directories");

var tasks = directories(config.source.module).map(function(module){
	return "module-" + module;
});

tasks.forEach(function(task){
	gulp.task(task + "-js", function(){
		var module = task.replace("module-", "");
		return gulp.src(config.source.module + module + "/**/*.ts")
		.pipe(gulp.dest(config.dest.js));
	});

	gulp.task(task + "-html", function(){
		var module = task.replace("module-", "");
		return gulp.src(config.source.module + module + "/**/*.html")
		.pipe(flatten())
		.pipe(gulp.dest(config.dest.html));
	})

	gulp.task(task, [task + "-js", task + "-html"]);
})

gulp.task("modules", tasks);
