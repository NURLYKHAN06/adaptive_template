let gulp = require('gulp'),
    prefixer =  require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minify = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass')

function css(){
    return gulp
        .src('assets/scss/*scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(minify())
            .pipe(concat('styles.css'))
            .pipe(prefixer('last 20 versions'))
        .pipe(sourcemaps.write('/scss/maps'))
        .pipe(gulp.dest('assets/'))
}

function watch() {
    gulp.watch('assets/scss/*scss', css)
}

exports.css = css
exports.watch = watch
