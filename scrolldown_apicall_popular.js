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

