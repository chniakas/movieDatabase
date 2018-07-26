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