const numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');

const personalMovieBD = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const a = prompt('Один из просмотренных?', ''),
      b = prompt('На сколько оцените?', ''),
      c = prompt('Один из просмотренных?', ''),
      d = prompt('На сколько оцените?', '');

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD);