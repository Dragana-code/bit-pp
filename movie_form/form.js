var createdMovieList = [];
var $movieTitle = document.querySelector('#title');
var $movieList = document.querySelector('#movieList');
var $createMovie = document.querySelector('#createMovie');
var $errorDisplay = document.querySelector('#errorDisplay');
var $movieLength=document.querySelector('#length');
var $movieGenre=document.querySelector('#movieGenere');



var onMovieCreate = function () {
    var titleValue = $movieTitle.value;
    var movieLength=$movieLength.value;
    var movieGenre=$movieGenre.value;
    if (!titleValue || !movieLength) {
        $errorDisplay.textContent = 'Both title and movie length are required!';
        return;
    }

    var newMovie = new Movie(titleValue, movieLength, movieGenre);

    createdMovieList.push(newMovie);
    $movieList.innerHTML += '<li>' + newMovie.getData() + '</li>';
    console.log(createdMovieList);
}

$createMovie.addEventListener('click', onMovieCreate);

var onCreateProgram=function(){
    var dateValue=$programDate.value;
    var newProgram=new Program(new Date(dateValue));
    createdPrograms.push(newProgram);
    console.log(newProgram);

    $addProgram.innerHTML+='<option value='+newProgram.id+'>'+newProgram.date+'</option>';
    $programList.innerHTML='<li>'+newProgram.getdata()+'</li>';
}

console.log(createdPrograms);
$createProgram.addeventListener('click', onCreateProgram);

var addMovie=function(){
    var selectedMovie=$movieListadd.value;
    var parseMovie=JSON.parse(selectedMovie);
}

