var gulp = require('gulp');
var concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
const zip = require('gulp-zip');


//styles task

gulp.task('styles', function() {
    return gulp.src(['project/css/style.css' ])
      .pipe(autoprefixer())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('production/css'))
  });
  

 
//scripts task

gulp.task('scripts', function() {
    return gulp.src('project/js/custom.js' )
      .pipe(uglify())
      .pipe(gulp.dest('production/js'))
  });
  

//zipped task 

gulp.task('compress' ,function() {
    return gulp.src('production/**/*.*')
          .pipe(zip('production-pixasteel.zip'))
          .pipe(gulp.dest('.'))
})
     
 