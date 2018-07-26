function scrolldown(typedMovie, counter) {

    if (typedMovie === '') {

        var request = scrollApi(counter);

        request.done(function (response) {
            var movies = response.results;

            popular(movies);

        })

    } else {

        var request = scrollSearchApi(typedMovie, counter);

        request.done(function (response) {
            var movies = response.results;
            popular(movies);
        })
    }
}