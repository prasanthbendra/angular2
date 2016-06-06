var config = require('../config');
var gulp = require("gulp");
var directories = require("../util/list-directories");

var tasks = directories(config.source.module).map(function(module){
	return "module-" + module;
});

gulp.task("watch", function() {
    gulp.watch(config.source.bower, ["bower"]);

    gulp.watch(config.source.assets.js, ["scripts"]);
    gulp.watch(config.source.assets.css, ["styles"]);
    gulp.watch(config.source.assets.fonts, ["fonts"]);
    gulp.watch(config.source.assets.images, ["images"]);

    gulp.watch([config.source.root + "app.js", config.source.root + "config.js", config.source.root + "index.html"], ["index"]);

    tasks.forEach(function(task){
    	var module = task.replace("module-", "");
        gulp.watch(config.source.module + module + "/**/*.js", [task + "-js"]);
	    gulp.watch(config.source.module + module + "/**/*.html", [task + "-html"]);
	});
});
