function scrollSearchApi(typedMovie, counter){

       return  $.ajax({
            url: "https://api.themoviedb.org/3/search/movie?api_key=7c4522cbf06e155ec5b0e9aef32dabcc&language=en-US&query=" + typedMovie + "&page=" + counter + "&include_adult=false",
            type: 'GET',
            data: {
                format: 'json'
            }
        })

}