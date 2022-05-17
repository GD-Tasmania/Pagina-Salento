const formulario = document.getElementById('formulario');
const btn1 = document.getElementById('btn1');
window.addEventListener('load',createCard);
btn1.addEventListener('click', inicial);
function inicial(){
    const fondo = document.createElement('div')
    const formulario = document.getElementById('formulario');

    fondo.appendChild(formulario)

    formulario.classList.add('fondo');
}

function createCard() {
    const formulario = document.getElementById('formulario');
    formulario.removeChild('formulario');
}