var gulp = require('gulp');
var minifyHTML = require('gulp-htmlmin');
var uglifycss = require('gulp-uglifycss')

gulp.task('minify', function() {
    return gulp.src('index.html')
    .pipe(minifyHTML({collapseWhitespace: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('uglify', function() {
    return gulp.src('css/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('css'));
});