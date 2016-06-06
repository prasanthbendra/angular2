var config = require('../config');
var gulp = require("gulp");

gulp.task("default", ["watch", "bower", "scripts", "styles", "fonts", "images", "modules", "index"]);
