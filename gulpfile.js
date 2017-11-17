var gulp = require("gulp"); //本地安装gulp所用到的地方
var gutil = require("gulp-util");
var del = require("del"); //删除文件
var less = require('gulp-less'); //less语法
var concat = require("gulp-concat"); //合并
var minifycss = require('gulp-minify-css'); //压缩css
var autoprefixer = require('gulp-autoprefixer'); //自动补全浏览器兼容后缀
var cached = require('gulp-cached'); // 搭配 gulp-remember 可增量编译
var remember = require('gulp-remember'); //搭配 gulp-cached 可增量编译
var plumber = require('gulp-plumber'); //校正报错
var replace = require('gulp-replace'); //替换
var webpack = require('webpack');
var config = require('./webpack.config2.js');
var connect = require('gulp-connect'); //本地服务
var rest = require('connect-rest');
var uglify = require('gulp-uglify');


var browserSync = require('browser-sync');
var webreload = browserSync.reload;
var nodemon = require('gulp-nodemon');

var src = {
    html: './src/index.html',
    less: './src/style/index.less',
    img: './src/style/img/**/*'
}

var dist = {
    root: "./dist",
    js: './dist/style/mobile/js',
    css: './dist/style/mobile/css',
    img: './dist/style/mobile/css/img'
};

function clean(done) {
    del.sync(['dist/**/*']);
    done();
}




var devCompiler = devCompiler = webpack(config);

function devWebpack(done) {
    devCompiler.run(function (err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack:build-dev", err);
            return;
        }
        gutil.log("[webpack:build-dev]", stats.toString({
            children: false, // 关闭抽离css 插件信息
            chunks: false, //关闭输出打包js文件名
            colors: true //颜色
        }));
        done();
    });

}

function node(done) {
    nodemon({
        script: 'app.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'

        }
    })
    done();

}

function webStart(done){
    browserSync.init('./dist/**/*', {
         proxy: 'http://localhost:3000',
         browser: 'chrome',
         notify: false,
         port: 3001
     });
     done();
}





function html(done) {
    return gulp.src(src.html)
        .pipe(plumber())
        .pipe(cached('html')) // 只传递更改过的文件
        .pipe(replace(/\~\/(\S.*.(js|css|png|jpg|gif))/g, function (match, p1) {
            return '192.168.26.144:9090/' + p1;
        }))
        .pipe(remember('html')) // 把所有的文件放回 stream
        .pipe(gulp.dest(dist.root));
    done();
}


function connectServer(done) {
    connect.server({
        root: dist.root,
        port: 9880,
        livereload: {
            port: 28532
        },
        middleware: function (connect, opt) {
            return [rest.rester({
                context: "/"
            })]
        }
    });
    done();
}




function watch(done) {
    var wHtml = gulp.watch(src.html, gulp.series(html, reload));
    wHtml.on('change', function (event) { // console.log(event);
        if (event.type === 'deleted') {
            delete cached.caches.html[event.path];
            remember.forget('html', event.path);
        }
    });
    gulp.watch([
        './src/**/*',
        '*.js'
    ], gulp.series(devWebpack, reload));
    gulp.watch('./src/style/**/*.less', css);
    gulp.watch(src.img, img);
    gulp.watch('./dist/**/*',webreload)
    done();

}


function css(done) {
    gulp.src(src.less) //该任务针对的文件
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(minifycss()) //该任务调用的模块
        .pipe(gulp.dest(dist.css))
        .pipe(connect.reload());
    done();
}

function buildCss(done) {
    gulp.src(src.less) //该任务针对的文件
        .pipe(less())
        .pipe(gulp.dest(dist.css))
        .pipe(connect.reload());
    done();
}


function img(done) {
    gulp.src(src.img) //该任务针对的文件
        .pipe(gulp.dest(dist.img))
        .pipe(connect.reload());
    done();
}



function reload() {
    return gulp.src('dist/**/*')
        .pipe(connect.reload()); //自动刷新
}
gulp.task("default", gulp.series(clean, devWebpack, html, css, img,node,webStart,watch));