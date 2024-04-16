const box = document.getElementById('box'),
      btn = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper')

box.style.backgroundColor = 'blue'

/* for(let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'black'
} */
hearts.forEach(item => {
  item.style.backgroundColor = 'gold'
})

const div = document.createElement('div')
//const text = document.createTextNode('Hello!')
div.classList.add('black')

//document.body.append(div)
//wrapper.append(div)
wrapper.prepend(div)
      


