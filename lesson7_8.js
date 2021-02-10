let divs = document.querySelectorAll('div')
const link = document.querySelector('a')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation()
        console.log(this.getAttribute('id'))
    }, true)
}

link.addEventListener('click', handleLinkClick)

function handleLinkClick (event) {
    event.preventDefault()

    let div = divs[0]

    div.style.display = div.style.display === 'none'
    ? 'flex'
    : 'none'

    console.log(div.style.display)
}