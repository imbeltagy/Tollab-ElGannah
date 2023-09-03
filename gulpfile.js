const gulp = require("gulp"),
  connect = require("gulp-connect"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass")(require("sass")),
  autoprefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify"),
  sourcemaps = require("gulp-sourcemaps");

// Compile Pug Files
gulp.task("compile-pug", () =>
  gulp.src("./stage/index.pug").pipe(pug()).pipe(gulp.dest("./docs/")).pipe(connect.reload())
);

// Compile SASS Files With Prefixes
gulp.task("compile-sass", () =>
  gulp
    .src("./stage/sass/main.sass")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./docs/assets/css/"))
    .pipe(connect.reload())
);
gulp.task("nomap-sass", () =>
  gulp
    .src("./stage/sass/main.sass")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest("./docs/assets/css/"))
    .pipe(connect.reload())
);

// Redirect JS
gulp.task("compress-js", () =>
  gulp
    .src("./stage/js/*.*")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./docs/assets/js/"))
    .pipe(connect.reload())
);
gulp.task("nomap-js", () =>
  gulp.src("./stage/js/*.*").pipe(uglify()).pipe(gulp.dest("./docs/assets/js/")).pipe(connect.reload())
);

// Redirect Assets
gulp.task("redirect-assets", () =>
  gulp.src("./stage/assets/**/**.*").pipe(gulp.dest("./docs/assets")).pipe(connect.reload())
);

// Start Server & Watch Changes
gulp.task("default", () => {
  connect.server({
    root: "./docs/",
    livereload: true,
  });
  gulp.watch("./stage/index.pug", gulp.series("compile-pug"));
  gulp.watch("./stage/sass", gulp.series("compile-sass"));
  gulp.watch("./stage/js", gulp.series("compress-js"));
  gulp.watch("./stage/assets", gulp.series("redirect-assets"));
});
