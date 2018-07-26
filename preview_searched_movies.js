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
            var movieText = typedmovie.target.value;

            //Check for empty input
            if (movieText !== '') {
                $.ajax({
                        url: "https://api.themoviedb.org/3/search/movie?api_key=7c4522cbf06e155ec5b0e9aef32dabcc&language=en-US&query=" + movieText + "&page=1&include_adult=false",
                        type: 'GET',
                        data: {
                            format: 'json'
                        },
                    })

                    .done(function (response) {
                        var movies = response.results;
                        var postersList= document.querySelector('.posters');
                        postersList.innerHTML= '';
                        popular(movies);
                    })
            }
        }, 1000);
    })();
};