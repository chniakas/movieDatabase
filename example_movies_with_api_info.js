// api_key=7c4522cbf06e155ec5b0e9aef32dabcc

// api-request = https://api.themoviedb.org/3/movie/550?api_key=7c4522cbf06e155ec5b0e9aef32dabcc
// api-read-acces-token =eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzQ1MjJjYmYwNmUxNTVlYzViMGU5YWVmMzJkYWJjYyIsInN1YiI6IjViMzlkYmJiYzNhMzY4MGQ3MjAwMmQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ft9LtNgqOUHJ8CDaN9JwjpmvCsFQuuuM8Rz3YWwyBD8


document.querySelector('#btn').addEventListener('click', loadData);

function loadData() {
    // Create an xhr object
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        //check status
        if (this.readyState == 4 && this.status == 200) {

            var movies = JSON.parse(this.responseText).results;
            //select the ul to put the images in li into the foreach
            var postersList = document.querySelector('.posters');

            movies.forEach(movie => {
                //debugger;
                var listElement = document.createElement('LI');
                listElement.setAttribute('class','lister');
                var titleElement = document.createElement('P');
                titleElement.setAttribute('class','nameTitle');
                titleElement.innerHTML = movie.title;
                var imageElement = document.createElement("IMG");
                imageElement.setAttribute('class','imager');
                imageElement.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                listElement.appendChild(titleElement);
                listElement.appendChild(imageElement);
                postersList.appendChild(listElement);
            });
            
            // var posters = document.querySelector('.container');
            // movies.forEach(movie => {
            //     //debugger; 
            //     var titleContainer = document.createElement('DIV');
            //     titleContainer.setAttribute('class', 'title');
            //     var photoContainer = document.createElement('DIV');
            //     photoContainer.setAttribute('class', 'photo');

            //     var titleElement = document.createElement('P');
            //     titleElement.setAttribute('class', 'nameTitle');
            //     titleElement.innerHTML = movie.title;

            //     var imageElement = document.createElement("IMG");
            //     imageElement.setAttribute('class', 'imager');
            //     imageElement.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

            //     titleContainer.appendChild(titleElement);
            //     photoContainer.appendChild(imageElement);
            // });
        }
    }

    xhr.open('GET', 'https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=7c4522cbf06e155ec5b0e9aef32dabcc', true);
    xhr.send();
}