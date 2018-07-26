function infoPreview(movie) {

    //create container element
    var container = document.querySelector('.container');

    templateHandlebar(movie);

    //create genre element
    var genreIcon = document.createElement('div');
    genreIcon.setAttribute('class', 'container');
    genreIcon.innerHTML = movie.genre_ids;
    var genreId = genreIcon.innerHTML;

    getGenre().done(function (response) {
        let genres = response.genres;

        let genreName = checkGenres(genres, genreId);
        genre(genreName);
    });
    //create average_vote element
    var rating = document.createElement('div');
    rating.setAttribute('class', 'rating');
    rating.innerHTML = movie.vote_average;
    var rateStars = rating.innerHTML;

    // Function to make star rating
    getStars(rateStars);



}