function bootStrap() {

    getMovie().done(function (response) {

        var movies = response.results;
        popular(movies);
    })

}