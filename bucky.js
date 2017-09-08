var movies = require('./movies1');

var buckysMovies = movies();
buckysMovies.favMovie = "Good Will Hunting";
console.log("Bucky's favorite movie is: " + buckysMovies.favMovie);