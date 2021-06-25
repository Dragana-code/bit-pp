function Movie(title, length) {
    this.title = title;
    this.length = length
}

Movie.prototype.getData = function () {
    return this.title + ', ' + this.length;
}