
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

/**
 *
 */

gulp.task('start', function () {

    gulp.watch('src/flex-grid.scss', [ 'process_scss' ]);
});

gulp.task('process_scss', function () {

    var plugins = [
        autoprefixer({browsers: ['last 5 version']}),
        cssnano()
    ];

    return gulp.src([
                './src/flex-grid.scss'
            ])
            .on('error', onError)
            .pipe(sass())
            .on('error', onError)
            .pipe(postcss(plugins))
            .on('error', onError)
            .pipe(cssmin())
            .on('error', onError)
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./dist'));
});

function onError(err) {

    console.log(err);

    this.emit('end');
}
