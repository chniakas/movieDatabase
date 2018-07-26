function getGenre() {
    return $.ajax({
        url: "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=7c4522cbf06e155ec5b0e9aef32dabcc",
        type: 'GET',
        data: {
            format: 'json'

        }
    });
}