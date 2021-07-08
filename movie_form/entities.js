function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = function () {
        var movieGenre = genre
    };
}

Movie.prototype=Object.create(Genre.prototype);
Movie.prototype.constructor=Movie;

Movie.prototype.getData = function () {
    return this.title + ', ' + this.length + ' min, ' + this.getGenreData();
}

function Program (date){
    this.date=date.getUTCDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear();
    this.listOfMovies=[];
    this.totalNumOfMovies=0;
    this.addMovie=function(movie){
        var a=this.checkmovie(movie);
        if(a<4){
            if(this.sumOfLength()<=(8*60)){
                this.listOfMovies.push(movie);
                this.totalNumOfMovies++;
            }else{
                console.log('Movies length cannot be longer than 8 hrs.');
            }
        }
    }
    this.getData=function(){
        var sum=0;
        for(var i=0; i<this.listOfMovies.length; i++){
            sum+=this.listOfMovies[i].length;
        }
        return sum;
    }
    
}
