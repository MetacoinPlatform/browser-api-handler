const gulp = require("gulp")
const ts = require("gulp-typescript")

gulp.task('compile', function () {
    var tsProject = tsc.createProject('tsconfig.json');
    var tsResult = gulp.src(['src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return merge(tsResult, tsResult.js)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});