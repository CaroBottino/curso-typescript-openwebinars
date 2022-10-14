var moviesSmallCaro = [
    { title: 'Movie 1' },
    { title: 'Movie 2' },
    { title: 'Movie 3' },
    { title: 'Movie 4' },
    { title: 'Movie 5' },
];
var moviesFullCaro = [
    {
        title: 'Movie 1',
        director: { name: 'Ridley Scott 1' },
        actors: [{ name: 'Actor one 1' }, { name: 'Actor two 1' }]
    },
    {
        title: 'Movie 2',
        director: { name: 'Ridley Scott 2' },
        actors: [{ name: 'Actor one 2' }, { name: 'Actor two 2' }]
    },
    {
        title: 'Movie 3',
        director: { name: 'Ridley Scott 3' },
        actors: [{ name: 'Actor one 3' }, { name: 'Actor two 3' }]
    },
    {
        title: 'Movie 4',
        director: { name: 'Ridley Scott 4' },
        actors: [{ name: 'Actor one 4' }]
    },
    {
        title: 'Movie 5',
        director: { name: 'Ridley Scott 5' },
        actors: [{ name: 'Actor one 5' }]
    },
];
// Recomendation use :any as a movie type
function getDirectorCaro(movie) {
    var _a, _b;
    return (_b = (_a = movie.director) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'Unknown Director';
}
// Recomendation use :any as a movie type
function getActorsCaro(movie) {
    var _a;
    return (_a = movie.actors) !== null && _a !== void 0 ? _a : 'Unknown actors';
}
// Recomendation use :any as a movie type
function getLeadingActorCaro(movie) {
    var _a, _b, _c;
    return (_c = (_b = (_a = movie.actors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : 'Unknown actor';
}
// Recomendation use :any as a movie type
function getSecondaryActorCaro(movie) {
    var _a, _b, _c;
    return (_c = (_b = (_a = movie.actors) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : 'Unknown actor';
}
// Recomendation use :any as a movie type
function logMovieCaro(movie) {
    console.log('Director:', getDirectorCaro(movie));
    console.log('Actors:', getActorsCaro(movie));
    console.log('Lead actor', getLeadingActorCaro(movie));
    console.log('Second actor', getSecondaryActorCaro(movie));
}
// Recomendation use :any as a movie type
function logSmallMoviesCaro(movie) {
    logMovieCaro(movie);
}
// Recomendation use :any as a movie type
function logFullMoviesCaro(movie) {
    logMovieCaro(movie);
}
moviesSmallCaro.forEach(function (movie) {
    console.group('Small movies Caro');
    logSmallMoviesCaro(movie);
    console.groupEnd();
});
moviesFullCaro.forEach(function (movie) {
    console.group('Full movies Caro');
    logFullMoviesCaro(movie);
    console.groupEnd();
});
