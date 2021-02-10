let button = document.querySelector('button')
let h1 = document.querySelector('h1')
const input = document.querySelector('input')

function buttonHandler() {
    console.log('clicked!')
    h1.textContent = input.value
}

h1.addEventListener('mouseenter', function() {
    this.style.color = 'white'
    this.style.backgroundColor = 'black'
    this.style.borderRadius = '20px'
    this.style.transition = '0.5s'
    this.style.textAlign = 'center'
})

h1.addEventListener('mouseleave', function() {
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
})

button.addEventListener('click', buttonHandler) 