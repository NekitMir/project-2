let numberOfFilms

function start() {
  numberOfFilms = +prompt('Сколько посмотрели?', '')

  while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько посмотрели?', '')
  }
}

start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних ?', '')
    const b = prompt('Какая оценка?', '')
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b
      console.log('done')
    } else {
      console.log('error')
      i--
    }
  }
}

rememberMyFilms()

function detectPersonalLevel() {
  if(personalMovieDB.count < 10) {
    console.log('Просмотрено мало')
  } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Классический зритель')
  } else if(personalMovieDB.count >= 30) {
    console.log('Киноман');
  } else {
    console.log('Ошибка');
  }
}

detectPersonalLevel()

function showMyDb (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDb(personalMovieDB.private)

function writeYourGenres() {
  for(let i = 1; i <= 3; i++) {
    let genre = prompt(`Любимый жанр под номером ${i}`)
    personalMovieDB.genres.push(genre)
  }
}

writeYourGenres()