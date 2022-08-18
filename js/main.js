var open = document.getElementById('open')
var close = document.getElementById('close')
var x = document.getElementById('togle_contact')

open.addEventListener('click', mostrar)
close.addEventListener('click', borrar)

function mostrar () {
    x.classList.add("modal_container")
    // open.classList.add("boton-close")
    // close.classList.add("open-close")
}

function borrar () {
    x.classList.remove("modal_container")
    // open.classList.remove("boton-close")
    // close.classList.remove("open-close")
}