function templateHandlebar(movie) {

    var container = document.querySelector('.container');


    var context = `
        <p class='title'>{{title}}</p>
        <img class='poster' src='https://image.tmdb.org/t/p/w500/{{path}}'></img>
        <p class='titler'>OVERVIEW</p>
        <p class='summary'>{{overview}}</p>
    `;
    var template = Handlebars.compile(context);
    var data = template({
        title: movie.original_title,
        path: movie.poster_path,
        overview: movie.overview
    });
    container.innerHTML += data;
}