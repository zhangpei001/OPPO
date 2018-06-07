var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var connect = require("gulp-connect");

// 定义一个复制文件的任务
gulp.task("copyfile",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo"));
});
// 复制JS文件
gulp.task("copyjs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\js"));
});
// 复制图片文件
gulp.task("images",function(){
	gulp.src("img/*.jpg")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\img"));
});

//sass编译
gulp.task("sass",function(){
	gulp.src(["css/*.scss"])
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\css"));
});

//合并文件
gulp.task("concatjs",function(){
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("index.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\js"));
});


//合并和压缩文件
gulp.task("concatanduglifyjs",function(){
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("index.js"))
	.pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\js"));
});
// 启动监听器
gulp.task("watchall",function(){
	gulp.watch("index.html",["copyfile"]);
	gulp.watch("js/*.js",["copyjs"]);
	gulp.watch("img/*.jpg",["images"]);
	gulp.watch("css/*.scss",["sass"]);
	gulp.watch("js/index.js",["concatanduglifyandrenamejs"]);
});//当文件发生变化时执行这个命令
