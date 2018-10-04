'use strict';

const gulp = require("gulp");
const scss = require("gulp-scss");
const rimraf = require("rimraf");
const debug = require("gulp-debug");
const watch = require("gulp-watch");
const rigger = require("gulp-rigger");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const cssmin = require("gulp-minify-css");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync"),
    reload = browserSync.reload;

const path = {
    build: {
        html: 'aboutCompany/',
        css: 'aboutCompany/',
        js: 'aboutCompany/js/',
        img: 'aboutCompany/assets/img/',
        fonts: 'aboutCompany/assets/fonts/',
        other: 'aboutCompany/Лампы_files',
    },

    src: {
        html: 'components/aboutCompany.html',
        style: 'components/aboutCompany.scss',
        js: 'components/aboutCompany.js',
        img: './components/assets/img/*.*',
        fonts: './components/assets/fonts/**/*.*',
        other: 'components/Лампы_files/*.*',
    },

    watch: {
        html: 'components/*.html',
        style: 'components/**/*.scss',
        js: 'components/**/*.js',
        img: './components/assets/img/*.*',
        fonts: './components/assets/fonts/**/*.*',
        other: 'components/Лампы_files/',
    },
    clean: './aboutCompany/',
};

const config = {
    server: {
        baseDir: "./aboutCompany",
        directory: true,
    },
    tunnel: false,
    host: 'localhost',
    port: 3030,
    logPrefix: 'Feron',
};

gulp.task('html:build', () => {

    return gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(debug())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('js:build', () => {

    return gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('style:build', () => {

    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(scss())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('image:build', () => {

    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('fonts:build', () => {

    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


gulp.task('other:css', () => {

    return gulp.src(path.src.other)
        .pipe(gulp.dest(path.build.other))

});

gulp.task('build',
    gulp.parallel(
        'html:build',
        'js:build',
        'style:build',
        'other:css',
        'fonts:build',
        'image:build'));


gulp.task('watch', () => {

    gulp.watch([path.watch.html], gulp.parallel('html:build'));
    gulp.watch([path.watch.style], gulp.parallel('style:build'));
    gulp.watch([path.watch.js], gulp.parallel('js:build'));
    gulp.watch([path.watch.img], gulp.parallel('image:build'));
    gulp.watch([path.watch.fonts], gulp.parallel('fonts:build'));
    gulp.watch([path.watch.other], gulp.parallel('other:css'));
});



gulp.task('webserver', function() {
    browserSync(config);
});

gulp.task('clean', (cb) => {
    rimraf(path.clean, cb);
});

gulp.task('default', gulp.series('build', gulp.parallel('webserver', 'watch')));