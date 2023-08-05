const { src, dest, watch, series} = require("gulp");
const sass = require('gulp-sass')(require('sass'));

/** build css file out of scss file */
const buildStyles = () => {
    return src("saas-lib/**/*.scss").pipe(sass()).pipe(dest("style"))
};

/** watch scss file and build css file */
const watchSCSS = () => {
    watch(["saas-lib/**/*.scss"], buildStyles)
}

/** exports a function that will run buildStyles first and then watchCSS */
exports.default = series(buildStyles, watchSCSS)