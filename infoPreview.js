function infoPreview(movie) {
    templateHandlebar(movie);

    //create genre element
    var genreIcon = document.createElement('div');
    genreIcon.setAttribute('class', 'container');
    genreIcon.innerHTML = movie.genre_ids;
    var genreId = genreIcon.innerHTML;

    getGenre().done(function (response) {
        let genres = response.genres;

        let genreName = fetchGenres(genres, genreId);
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

function fetchGenres(genres, genreId) {
    var genreNum = genreId.split(',');
    for (i = 0; i < genreNum.length; i++) {
      genres.forEach(genre => {
        if (genreNum[i] == genre.id) {
          genreNum[i] = genre.name;
        }
      });
    };
    return genreNum;
  }

  function genre(genres) {
    var listElement = document.querySelector('.container');
    var genreList = document.createElement('ul');
    genreList.setAttribute('class', 'genreList')
    for (i = 0; i < genres.length; i++) {
        var genre = document.createElement('li');
        var elem = document.createElement("img");
        elem.setAttribute('class', 'genreIcon');
        elem.setAttribute('src', 'img/' + genres[i] + '.svg');
        genre.appendChild(elem);
        genreList.appendChild(genre);
        listElement.appendChild(genreList);
    }
}