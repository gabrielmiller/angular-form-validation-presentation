var del = require('del');
var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpNgAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var webserver = require('gulp-webserver');

var appSrc = [
    'src/**/*.module.js',
    'src/**/*.js'
];

var appDest = "public";

gulp.task('serve', function() {
    gulp.src(appDest)
        .pipe(webserver({
            fallback: 'index.html',
            livereload: false,
            open: true
        }));
});

gulp.task('all', [
    'clean',
    'js',
    'lint'
]);

gulp.task('js', [
    'js:libs',
    'js:app'
]);


gulp.task('clean', function() {
    return del([appDest+"/*.js"]);
});

gulp.task('lint', function() {
    gulp.src(appSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('js:app', function() {
    gulp.src(appSrc)
        .pipe(gulpConcat('app.js'))
        .pipe(gulpNgAnnotate())
        .pipe(gulp.dest(appDest));
});

gulp.task('js:libs', function() {
    gulp.src('node_modules/angular/angular.js')
        .pipe(gulpConcat('libs.js'))
        .pipe(gulp.dest(appDest));
});
