var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var htmlmin = require("gulp-htmlmin");
var concat = require("gulp-concat");
var webserver = require("gulp-webserver");

gulp.task("webserver",function(){
	gulp.src("./")
	.pipe(webserver({
		host:"localhost",
		port:8080,
		livereload:true,
		open:true
	}))
})

// 压缩js
gulp.task("js",function(){
	gulp.src("./*.js")
	.pipe(concat("reapp.js"))
	.pipe(uglify())
	.pipe(gulp.dest("./"))
})
// 压缩"formatjs"
gulp.task("formatjs",function(){
	gulp.src("./format.js")
	.pipe(concat("data_format.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("./"))
})
// 压缩css
// gulp.task("css",function(){
	// gulp.src("./css/*.css")
	// .pipe(concat("restyle.css"))
	// .pipe(minifyCss())
	// .pipe(gulp.dest("./"))
// })

// 压缩html
var options = {
         collapseWhitespace: true,//压缩HTML
         removeEmptyAttributes: true//删除所有空格作属性值
 	}
gulp.task("html",function(){
	gulp.src("./*.html")
	.pipe(concat("rehtml.html"))
	.pipe(htmlmin(options))
	.pipe(gulp.dest("./"))
})
   
// watch监听
gulp.task("watch",function(){
	gulp.watch(["./index.html","format.js"])
})

// 默认执行任务
gulp.task("default",["webserver","html","js","formatjs","watch"]);