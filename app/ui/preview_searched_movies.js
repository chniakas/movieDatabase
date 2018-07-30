function search(typedmovie) {
    //timer
    var globalTimeout = null;

    (function () {

        if (globalTimeout != null) {
            clearTimeout(globalTimeout);
        }

        globalTimeout = setTimeout(function () {
            globalTimeout = null;

            //Get input text
             movieText = typedmovie.target.value;

            //Check for empty input
            if (movieText !== '') {
                window.Movies.getMovies(movieText).done(function (response) {
                        var movies = response.results;
                        var postersList= document.querySelector('.posters');
                        postersList.innerHTML= '';
                        popular(movies);
                    })
            }
        }, 1000);
    })();
};