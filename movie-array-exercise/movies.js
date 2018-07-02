//Create a array of movies objects
//Each movie should have a title, rating and has watched value
//Iterate through and print out

var movies = [
    {
        title: "Deadpool",
        rating: 4,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Star Wars",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3,
        hasWatched: false
    },
]

movies.forEach(function(movie){
    if(movie.hasWatched === true) {
        console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
    }
    else{
        console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
    }
});