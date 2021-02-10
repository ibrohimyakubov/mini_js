const a = document.querySelector('a')
let oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://t.me/UNV_UZB')
a.setAttribute('title', 'Go to the Telegram channel')
a.textContent = 'UNVIVERSAL'

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')

box1.classList.add('red')
box2.classList.remove('blue')
let hasClass = box2.classList.contains('blue')
console.log(hasClass)

if (hasClass) {
    box2.classList.remove('blue')
} else {
    box2.classList.add('blue')
}