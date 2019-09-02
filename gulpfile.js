var gulp = require("gulp"),
  watch = require("gulp-watch"),
  autoprefixer = require("autoprefixer"),
  postcss = require("gulp-postcss"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested");

gulp.task("default", function() {
  console.log("YEEEHUUUUU - YOU CREAATE A GULP FILE TASK.");
});

gulp.task("html", function() {
  console.log("imagine something useful html staff");
});

gulp.task("styles", function() {
  return gulp
    .src("./app/assets/styles/style.css")
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", () => {
  watch("./app/index.html", gulp.series("html"));
  watch("./app/assets/styles/style.css", gulp.series("styles"));
});
