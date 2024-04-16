const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько посмотрели?', '')
  
    while (personalMovieDB === '' || personalMovieDB === null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько посмотрели?', '')
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if(personalMovieDB.count < 10) {
      console.log('Просмотрено мало')
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Классический зритель')
    } else if(personalMovieDB.count >= 30) {
      console.log('Киноман');
    } else {
      console.log('Ошибка');
    }
  },
  showMyDb: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },  
  writeYourGenres: function() {
    for(let i = 1; i <= 3; i++) {
      let genre = prompt(`Любимый жанр под номером ${i}`)

      if(genre === '' || genre === null) {
        console.log('Error!')
        i--

      } else {
        personalMovieDB.genres[i - 1] = genre
      }

      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} -это ${item}`) //item - Каждый элемент в массиве, который перебираем. i - это номер по порядку
      })
      /* personalMovieDB.genres.push() */
      /* let genre = prompt(`Любимый жанр под номером ${i}`)
      personalMovieDB.genres.push(genre) */
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.private) {
      personalMovieDB.private = false
    } else {
      personalMovieDB.private = true
    }
  }

}


/* const arr = [1, 2, 3, 6, 8]

arr.forEach((value, i, arr) => {
  console.log(`${i}: ${value}, внутри массива ${arr}`);
}, 1000)

/* arr.pop()
arr.push(10)
console.log(arr); */

/* const str = prompt('', '')
const products = str.split(', ')
products.sort()
console.log(products.join('; '));  */
/* const soldier = {
  hp: 400,
  armor: 100,
  sayHello: function() {
    console.log('hello');
  }
}

const john = Object.create(soldier)

/* const soldJon = {
  hp: 100,
  
} */

/* Object.setPrototypeOf(john, soldier)
john.sayHello() */ 