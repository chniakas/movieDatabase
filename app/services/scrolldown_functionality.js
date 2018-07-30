function scrolldown(movieText, counter) {

    var movieText = movieText;
    if (movieText === '') {

        window.Movies.getMovies(counter).done(function (response) {
            var movies = response.results;
            popular(movies);
        })

    } else {

        window.Movies.getMovies(movieText, counter).done(function (response) {
            var movies = response.results;
            popular(movies);
        })
    }
}

