/*var src = './src';     
var dest = './build';  */
var path = require('path');
var dest = path.resolve(__dirname, "./../dist");
var src = path.resolve(__dirname, './../src');
var root = path.resolve(__dirname, './..');

module.exports = {
    source: {
        root: src + "/",
        bower: root + "bower_components/**/*",
        assets: {
            css: src + "/assets/css/**/*",
            js: src + "/assets/js/**/*",
            fonts: src + "/assets/fonts/**/*",
            images: src + "/assets/images/**/*",
        },
        module: src + "/modules/",
        html: src + "/modules/**/*.html",
    },
    dest: {
        root: dest + "/",
        html: dest + "/components/",
        images: dest + "/images/",
        js: dest + "/js/",
        css: dest + "/css/",
        fonts: dest + "/fonts/"
    }
}
