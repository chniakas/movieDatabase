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

function scrollSearchApi(typedMovie, counter){

    return  $.ajax({
         url: "https://api.themoviedb.org/3/search/movie?api_key=7c4522cbf06e155ec5b0e9aef32dabcc&language=en-US&query=" + typedMovie + "&page=" + counter + "&include_adult=false",
         type: 'GET',
         data: {
             format: 'json'
         }
     })

}

// var ScrollApi = (function(){

    function scrollApi(counter) {

        return $.ajax({
                url: "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=7c4522cbf06e155ec5b0e9aef32dabcc&language=en-US&query=&page=" + counter + "&include_adult=false",
                type: 'GET',
                data: {
                    format: 'json'
                }
            })


    // return {
    //     init: scrollApi
    // }
    }

// })();

