var gulp = require('gulp');
var data = require('gulp-data');
var stylus = require('gulp-stylus');


gulp.task('one', function () {
  return gulp.src('./src/css/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/css'));
});



/**
 * Created by Fairy on 2019/1/8.
 */
//1,引入插件模块
// const gulp = require('gulp');
// const jshint = require('gulp-jshint')
// const babel = require('gulp-babel');
// const browserify = require('gulp-browserify');
// const rename = require('gulp-rename')
// const uglify = require('gulp-uglify');
// const stylus = require('gulp-stylus');
// const concat = require('gulp-concat');
// const cssmin = require('gulp-cssmin');
// const htmlmin = require('gulp-htmlmin');
// const livereload = require('gulp-livereload');
// const opn = require('opn');
// const connect = require('gulp-connect');
// //2,配置插件任务
//
// //语法检查
// gulp.task('jshint', ()=> {
//   // 做一些事
//   return gulp.src('./src/js/*.js')
//     .pipe(jshint({esversion:6}))
//     .pipe(jshint.reporter('default'))
//     .pipe(livereload())
// });
// //语法转换
// gulp.task('babel',['jshint'],()=>{
//   return gulp.src('./src/js/*.js')
//     .pipe(babel({   //语法转化
//       presets: ['@babel/env']
//     }))
//     .pipe(gulp.dest('./build/js'))
//     .pipe(livereload())
// })
// //将commonjs模块语法转化成浏览器能解析的语法
// gulp.task('browserify', ['babel'],()=> {
//   // Single entry point to browserify
//   return gulp.src('./build/js/*.js')  // 导入主模块文件
//     .pipe(browserify())
//     .pipe(gulp.dest('./build/js'))
//     .pipe(livereload())
// });
// gulp.task('uglify',['browserify'],()=> {
//   return gulp.src('./build/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('./dist/js'))
//     .pipe(livereload())
// });
// //配置stylus
// gulp.task('stylus',  ()=> {
//   return gulp.src('./src/stylus/*.styl')
//     .pipe(stylus({
//       compress: true
//     }))
//     .pipe(gulp.dest('./build/css'))
//     .pipe(livereload())
// });
// //合并css
// gulp.task('concat', ['stylus'],()=> {
//   return gulp.src('./build/css/*.css')
//     .pipe(concat('built.css'))
//     .pipe(gulp.dest('./build/css'))
//     .pipe(livereload())
// });
// //压缩css
// gulp.task('cssmin', ['concat'], ()=> {
//   gulp.src('./build/css/built.css')
//     .pipe(cssmin())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('dist/css'))
//     .pipe(livereload())
// });
// //压缩html
// gulp.task('htmlmin', () => {
//   return gulp.src('./src/*.html')
//     .pipe(htmlmin({ collapseWhitespace: true ,removeComments:true}))
//     .pipe(gulp.dest('dist'))
//     .pipe(livereload())
// });
//
// //自动编译任务
// gulp.task('watch',['default'], function() {
//   livereload.listen();
//   connect.server({
//     root: 'dist',
//     livereload: true,
//     port:3000
//   });
//   opn('http://localhost:3000/home.html')
//   gulp.watch('./src/stylus/*.styl', ['default']);
//   gulp.watch('./src/js/*.js', ['default']);
//   gulp.watch('./src/*.html', ['default']);
// });
//
//
//
//
// //3，配置默认任务(可选)
// gulp.task('default', [ 'uglify','cssmin','htmlmin']);

