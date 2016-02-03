var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['compile-sass', 'watch']);

var sass_paths = [
    './css/**/*.sass'
];

gulp.task('compile-sass', function() {
    return gulp.src(sass_paths, {base: './'})
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    var lesswatcher = gulp.watch(sass_paths, ['compile-sass']);

    lesswatcher.on('change', function(event){
        console.log(`File ${event.path} was ${event.type}`);
    })

});


