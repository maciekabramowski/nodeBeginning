var movies = require('./movies1');

var emilysMovies = movies();
emilysMovies.favMovie = "The Notebook";
console.log("Emily's favorite movie is: " + emilysMovies.favMovie);