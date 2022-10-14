type MovieSmallCaro = {
    title: string;
}

type Person = {
    name: string;
}

type Director = Person;
type Actor = Person;

type MoviesFullCaro =  {
    title: string;
    director: Director;
    actors: Actor[];
}

const moviesSmallCaro: MovieSmallCaro[] = [
    { title: 'Movie 1' },
    { title: 'Movie 2' },
    { title: 'Movie 3' },
    { title: 'Movie 4' },
    { title: 'Movie 5' },
];
  
const moviesFullCaro = [
    {
      title: 'Movie 1',
      director: { name: 'Ridley Scott 1' },
      actors: [{ name: 'Actor one 1' }, { name: 'Actor two 1' }],
    },
    {
      title: 'Movie 2',
      director: { name: 'Ridley Scott 2' },
      actors: [{ name: 'Actor one 2' }, { name: 'Actor two 2' }],
    },
    {
      title: 'Movie 3',
      director: { name: 'Ridley Scott 3' },
      actors: [{ name: 'Actor one 3' }, { name: 'Actor two 3' }],
    },
    {
      title: 'Movie 4',
      director: { name: 'Ridley Scott 4' },
      actors: [{ name: 'Actor one 4' }],
    },
    {
      title: 'Movie 5',
      director: { name: 'Ridley Scott 5' },
      actors: [{ name: 'Actor one 5' }],
    },
];
  
// Recomendation use :any as a movie type
function getDirectorCaro(movie: any) {
    return movie.director?.name ?? 'Unknown Director';
}
  
// Recomendation use :any as a movie type
function getActorsCaro(movie: any) {
    return movie.actors ?? 'Unknown actors';
}
  
// Recomendation use :any as a movie type
function getLeadingActorCaro(movie: any) {
    return movie.actors?.[0]?.name ?? 'Unknown actor';
}
  
// Recomendation use :any as a movie type
function getSecondaryActorCaro(movie: any) {
    return movie.actors?.[1]?.name ?? 'Unknown actor';
}
  
// Recomendation use :any as a movie type
function logMovieCaro(movie: any) {
    console.log('Director:', getDirectorCaro(movie));
    console.log('Actors:', getActorsCaro(movie));
    console.log('Lead actor', getLeadingActorCaro(movie));
    console.log('Second actor', getSecondaryActorCaro(movie));
}
  
// Recomendation use :any as a movie type
function logSmallMoviesCaro(movie: any) {
    logMovieCaro(movie);
}
  
// Recomendation use :any as a movie type
function logFullMoviesCaro(movie: any) {
    logMovieCaro(movie);
}
  
moviesSmallCaro.forEach((movie) => {
    console.group('Small movies Caro');
    logSmallMoviesCaro(movie);
    console.groupEnd();
});
  
moviesFullCaro.forEach((movie) => {
    console.group('Full movies Caro');
    logFullMoviesCaro(movie);
    console.groupEnd();
});
  