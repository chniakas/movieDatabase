   var moviedb = (function () {

       var data = sessionStorage.getItem('movie');

       var movie = JSON.parse(data);

       infoPreview(movie);

   })();