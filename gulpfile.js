var gulp = require('gulp'), //��������
    connect = require('gulp-connect'), //����live reload������
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    port = process.env.port || 5000;

gulp.task('browserify',function(){
    gulp.src('./app/js/main.js')
        .pipe(browserify({
            transform: 'reactify',
        }))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('connect', function (){
    connect.server({
/*        root: './',*/
        port: port,
        livereload: true
    })
});

//reload js
gulp.task('js', function() {
    gulp.src('./dist/**/*.js')
        .pipe(connect.reload());
});

//reload html
gulp.task('html', function() {
    gulp.src('./dist/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./dist/**/*.js', ['js']);
    gulp.watch('./app/**/*.html', ['html']);
    gulp.watch('./app/js/**/*.js',['browserify']);
});

gulp.task('default', ['browserify']);

gulp.task('server', ['browserify', 'connect', 'watch']);