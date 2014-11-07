
var gulp = require("gulp");
var less = require("gulp-less");
var minify = require("gulp-minify-css");
var concat = require("gulp-concat");
var rename = require("gulp-rename");

// creates css files from less
gulp.task("less", function()
{
	gulp.src("less/**/*")
		.pipe(less())
		.on("error", function(error){ console.log(error); })
		.pipe(gulp.dest("css/"));
});

// concatenates css into one stylesheet 
gulp.task("concat", function()
{
	gulp.src(["css/**/*", "!css/style.css", "!css/style.min.css"])
		.pipe(concat("style.css"))
		.pipe(gulp.dest("css/"));
});

// minifies production stylesheet
gulp.task("minify", function()
{
	gulp.src("css/style.css")
		.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("css/"));
});

gulp.task("watch", function()
{
	gulp.watch("less/**/*", ["less", "concat", "minify"]);
});

gulp.task("default", ["less", "concat", "minify", "watch"]);