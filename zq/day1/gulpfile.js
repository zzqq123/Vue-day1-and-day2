const gulp = require('gulp');
const Sass = require('gulp-sass');

gulp.task('sass',function(){
    gulp.src('css/*.scss')
    .pipe(Sass())
    .pipe(gulp.dest('./css'))
    })

gulp.task('Watch',function(){
    gulp.watch('css/**/*.scss',['sass']);
    })

gulp.task('default',['sass','Watch']);