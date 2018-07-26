function checkGenres(genres, genreId) {

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