var createdMovieList = [];
var $movieTitle = document.querySelector('#title');
var $movieList = document.querySelector('#movieList');
var $createMovie = document.querySelector('#createMovie');
var $errorDisplay = document.querySelector('#errorDisplay');



var onMovieCreate = function () {
    var titleValue = $movieTitle.value;
    if (!titleValue) {
        $errorDisplay.textContent = 'Title is required!';
        return;
    }

    var newMovie = new Movie(titleValue, 123);

    createdMovieList.push(newMovie);
    $movieList.innerHTML += '<li>' + newMovie.getData() + '</li>';
    console.log(createdMovieList);
}

$createMovie.addEventListener('click', onMovieCreate);


