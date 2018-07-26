function popular(movies) {
    var postersList= document.querySelector('.posters');

    movies.forEach(movie => {
        if (movie.poster_path && movie.overview && movie.original_title) {
            var listElement = document.createElement('div');
            listElement.setAttribute('class', 'lister');

            var context = `
                    <p class='nameTitle'>{{title}}</p>
                    <img class='imager' src='https://image.tmdb.org/t/p/w500/{{path}}'></img>
                    <p class='overview'>{{overview}}</p>`;

            var template = Handlebars.compile(context);

            var data = template({
                title: movie.original_title,
                path: movie.poster_path,
                overview: movie.overview
            });

            listElement.innerHTML += data;


                postersList.appendChild(listElement);

            listElement.addEventListener('click', (e) => {
                if (e.target) {
                    sessionStorage.setItem('movie', JSON.stringify(movie));
                    window.location.href = "http://127.0.0.1:5500/moviePrev.html"


                }
            });
        }
    });
}
