$(document).ready(function () {
    let typedMovie = '';
    let typedmovie;

    //Preview most popular movies
    (function getPopular(){
        getMovie().done(function (response) {

            var movies = response.results;
            popular(movies);
        })
    })();

    // Search input
    var searchMovie = document.getElementById('movie_title');

    //Search input event listener
    searchMovie.addEventListener('keyup', (e) => {

        typedmovie = e;
        typedMovie = e.target.value;
        search(typedmovie);
        counter = 2;
    });

    var counter = 2;
    //Infinity scroll
    $(window).scroll(function () {

        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {

            scrolldown(typedMovie, counter);
            counter++;
        }
    });
});