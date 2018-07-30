(function apiCalls() {

    function linkForApiCall( movieText = '',counter = 1) {
        let info = movieText ? 'search/movie' : 'movie/popular';

        return `https://api.themoviedb.org/3/${info}?api_key=7c4522cbf06e155ec5b0e9aef32dabcc&language=en-US&query=${movieText}&page=${counter}&include_adult=false`
    };

    window.Movies.getMovies = function (movieText, counter) {
        return $.get(linkForApiCall(movieText, counter));
    };


})();
