
var div = document.querySelector('#playground')
var h1 = document.querySelector('h1')
var p = document.querySelectorAll('.text')
var input = document.querySelector('input')

div.innerHTML = '<h2 style="text-align: center; color: red; font-family: sans-serif;">From JavaScript</h2>'
h1.textContent = "Changed from JavaScript"

console.log(input.value)
console.log(div.innerHTML)
console.log(p)
console.log(h1.textContent)