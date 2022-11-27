const element = document.getElementsByClassName('openbot')
const chat = document.getElementsByClassName('chat')
element[0].addEventListener('click', () => {
chat[0].style.display = 'block'
    element[0].style.display = 'none'
})
const closex = document.getElementsByClassName('close')
closex[0].addEventListener('click', () => {
    chat[0].style.display = 'none'
    element[0].style.display = 'block'
})

