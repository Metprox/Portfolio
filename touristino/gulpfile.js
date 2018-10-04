"use strict";

const gulp = require('gulp'), // Сам gulp
    cssnano = require('gulp-cssnano'), // Минификатор
    autoprefixer = require('gulp-autoprefixer'), // Префиксер
    sass = require('gulp-sass'), // Scss компилятор
    concat = require('gulp-concat'), // Для конкатенации js файлов
    imagemin = require('gulp-imagemin'), // Сжатие изображений
    pngquant			= require('imagemin-pngquant'), // Сжатие png
    notify = require('gulp-notify'), // Уведомления об ошибках
    uglify = require('gulp-uglifyjs'), // Минификатор для js
    rename = require('gulp-rename'), // Переименование файлов
    del = require('del'), // Удаление файлов и директорий
    browserSync = require('browser-sync'), // Локальный сервер
    plumber = require('gulp-plumber'), // Отлавливает исключения, но не прерывает выполнение gulp
    fs = require('fs'); // Файловая система node.js

const webpack = require('webpack'), // Webpack
    gutil = require('gulp-util'),
    notifier = require('node-notifier'),
    webpackStream = require('webpack-stream'),
    webpackConfig = require('./webpack.config.js');

const twig = require('gulp-twig'),
    data = require('gulp-data'),
    path = require('path');

// ПУТИ
const paths = {
    base: './build', // Папка продакшена
    dev: './src', // Папка разработки
    src: { // Путь файлов разработки
        html: './src/*.html', // html
        scss: './src/scss/style.scss', // scss
        js: './src/js/**.js', // js
        img: './src/img/**/*.*', // img
        libs: './src/libs/**.*', // Библиотеки
        fonts: './src/fonts/**/**.*' // Шрифты
    },
    build: { // Путь файлов продакшена
        html: './build/', // html
        css: './build/css/', // css
        js: './build/js/', // js
        img: './build/img/', // img
        fonts: './build/fonts/', // Шрифты
        libs: './build/libs/' // Библиотеки
    },
};

// Инициализация проекта
gulp.task('create', function() {
    const folders = [
        paths.dev,
        paths.dev + '/components',
        paths.dev + '/twig',
        paths.dev + '/scss',
        paths.dev + '/img',
        paths.dev + '/fonts',
    ];

    folders.forEach(function(dir) {
        if (!fs.existsSync(dir))
            fs.mkdirSync(dir);
    });

    fs.appendFile(paths.dev + '/twig/index.twig', '<h1 style="color:green">Загрузилось....</h1><p style="color:red;">Файлы подключить не забудь..</p>');
    fs.appendFile(paths.dev + '/scss/style.scss', '*{}');
    fs.appendFile(paths.dev + '/index.js', 'console.log("from index.js")');
    fs.appendFile(paths.dev + '/api.json', '{"global":{"title":"some title"}}');

});

// HTML
gulp.task('html', function() {
    return gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.build.html))
        .pipe(plumber())
        .pipe(browserSync.reload({ stream: true }));
});

// TWIG
gulp.task('twig', function() {
    var api = fs.readFileSync('./src/api.json', 'utf8'); // загружает данные из api.yaml (можно заменить json)
    api = JSON.parse(api);
    return gulp.src(['./src/twig/*.twig'])
        .pipe(data(function(file) { // подсовывает данные из api.yaml в страницу (коллекции global и [имя страницы])
            var id = path.basename(file.path.replace('src/', ''));
            var array = Object.assign(api.global, api[id]);
            return array;
        }))
        .pipe(twig())
        .pipe(plumber())
        .pipe(gulp.dest(paths.base))
        .pipe(browserSync.reload({ stream: true }));
});

// СТИЛИ
gulp.task('sass', function() {
    return gulp.src(paths.src.scss)
        .pipe(sass({ outputStyle: 'expanded' })
            .on('error', notify.onError({
                message: "<%= error.message %>",
                title: "Sass ERROR!"
            })))
        .pipe(rename({ suffix: '.bundle', prefix: '' }))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cssnano())
        .pipe(gulp.dest(paths.build.css))
        .pipe(plumber())
        .pipe(browserSync.reload({ stream: true }));
});

// СКРИПТЫ
gulp.task('js', function() {
    gulp.src('./src/index.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest(paths.build.js))
        .pipe(browserSync.reload({ stream: true }));
});

// ИЗОБРАЖЕНИЯ
gulp.task('img', function() {
    return gulp.src(paths.src.img)
        //.pipe(cache(imagemin())) // Cache Images
        // .pipe(imagemin({
        //         progressive: true,
        //         svgoPlugins: [{removeViewBox: false}],
        //         use: [pngquant()],
        //         interlaced: true
        //       }))
        .pipe(plumber())
        .pipe(gulp.dest(paths.build.img));
});

// ШРИФТЫ
gulp.task('fonts', function() {
    return gulp.src(paths.src.fonts)
        .pipe(gulp.dest(paths.build.fonts));
});

// БИБЛИОТЕКИ	
gulp.task('libs', function() {
    return gulp.src(paths.src.libs)
        .pipe(gulp.dest(paths.build.libs));
});

// СЕРВЕР
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: paths.base
        },
        notify: false
    });
});

// WATCH - отслеживание изменений + сервер
gulp.task('watch', ['img', 'sass', 'html', 'js', 'twig', 'fonts', 'browser-sync'], function() {
    gulp.watch('src/img/**/*.*', ['img']);
    gulp.watch(['src/scss/**/*.scss', 'src/components/**/*.scss'], ['sass']);
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch(['src/twig/*.twig', 'src/components/**/*.twig', './src/api.json'], ['twig']);
    gulp.watch('src/fonts/**/*.*', ['fonts']);
});

// Очистка папки на продакшен
gulp.task('removedist', function() {
    del.sync(paths.base)
});

// По-дефолту запускается watch
gulp.task('default', ['watch']);

// BUIDL - очищается папкп 'build' и создаётся новая сборка
gulp.task('build', ['removedist', 'html', 'twig', 'sass', 'js', 'img', 'fonts']);