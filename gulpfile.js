var elixir = require('laravel-elixir');

require('laravel-elixir-browser-sync')

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
 'jquery': 'bower_components/jquery/',
 'bootstrap': 'bower_components/bootstrap-sass-official/',
 'angular': 'bower_components/angular/',
 'ngDialog': 'bower_components/ngDialog/',
 'ngInfiniteScroll': 'bower_components/ngInfiniteScroll/'
};

elixir(function (mix) {
 mix.sass([
 	"app.scss",
 	"style.scss"
 	]);

 mix.scripts(
     [
      paths.jquery        + 'dist/jquery.js',
      paths.bootstrap     + 'assets/javascripts/bootstrap.js',
      paths.angular       + 'angular.js',
      paths.ngDialog           + 'js/ngDialog.js',
      paths.ngInfiniteScroll   + '/build/ng-infinite-scroll.js'
     ],
     'public/js/vendor.js',
     __dirname + '/'
 ).scripts(
     [
      'assets/js/*'
     ],
     'public/js/app.js',
     __dirname + '/resources/'
 );

 // Put version before copy because version apparently clear everything in build folder
 mix.version([
  'public/css/app.css',
  'public/js/vendor.js',
  'public/js/app.js'
 ]);

 mix.copy(paths.bootstrap + "assets/fonts/**", "public/build/fonts");

 mix.browserSync([
  'app/**/*',
  'public/**/*',
  'resources/views/**/*'
 ], {
  proxy: 'larawings.dev',
  reloadDelay: 2000
 });
});