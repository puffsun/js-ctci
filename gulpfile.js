'use strict';

var gulp   = require('gulp');
var plugins = require('gulp-load-plugins')();
var debug = false;
var gutil = require("gulp-util");

var paths = {
    lint: ['./gulpfile.js', './src/**/*.js', './spec/**/*.js'],
    watch: ['./gulpfile.js', './src/**/*.*', './spec/**/*.js', '!spec/{temp,temp/**}'],
    tests: ['./spec/**/*.js', '!spec/{temp,temp/**}'],
    source: ['./src/*.js']
};

var plumberConf = {};

if (process.env.CI) {
    plumberConf.errorHandler = function(err) {
        throw err;
    };
}

gulp.task('debug', function() {
    debug = true;
    gutil.log( gutil.colors.green('RUNNING IN DEBUG MODE') );
    gulp.start('default');
});

gulp.task('lint', function () {
    return gulp.src(paths.lint)
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.plumber(plumberConf))
    .pipe(plugins.jscs())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('istanbul', function (cb) {
    debug = debug || false;
    gulp.src(paths.source)
    .pipe(plugins.istanbul()) // Covering files
    .pipe(plugins.istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
        gulp.src(paths.tests)
        .pipe(plugins.plumber(plumberConf))
        .pipe(plugins.jasmine())
        .pipe(plugins.istanbul.writeReports()) // Creating the reports after tests runned
        .on('finish', function() {
            process.chdir(__dirname);
            cb();
        });
    });
});

gulp.task('bump', ['test'], function () {
    var bumpType = plugins.util.env.type || 'patch'; // major.minor.patch

    return gulp.src(['./package.json'])
    .pipe(plugins.bump({ type: bumpType }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', ['test'], function () {
    gulp.watch(paths.watch, ['test']);
});

gulp.task('test', ['lint', 'istanbul']);

gulp.task('release', ['bump']);

gulp.task('default', ['test']);
