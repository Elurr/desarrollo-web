// MODAL_FORM LOGIN
// Botón que abra un formulario modal
const btnLogin = document.getElementById('btnLogin');
const modalForm = document.getElementById('loginForm');

btnLogin.addEventListener('click', () => {
    modalForm.style.display = 'block';
})

// Botón que cierre el modal
const btnClose = document.getElementById('btnClose');
const btnCancel = document.getElementById('btnCancel');

btnClose.addEventListener('click', () => {
    modalForm.style.display = 'none';
})
btnCancel.addEventListener('click', () => {
    modalForm.style.display = 'none';
})

// Al hacer clic fuera del modal, éste se cierra
window.onclick = function(event) {
    if (event.target == modalForm) {
        modalForm.style.display = 'none';
    }
}

//////////////////////////////////////////////////////////////
// BANNER_CARRUSEL

// Automatizar banner

// declaramos un array con los contenedores de las imgs
const carrete = document.getElementsByClassName('carousel-img');
// declaramos un índice para el array carrete
let slideIndex = 0;

function showSlides() {
 
    // limpiamos el carrete
    for (let i = 0; i < carrete.length; i++) {
        carrete[i].style.display = 'none';
        carrete[i].classList.remove('fade');
    }

    // mostrar la siguiente img
    if (slideIndex >= carrete.length) {
        // si el contador supera la longitud del carrete, se reinicia
        slideIndex = 0;
    }
    carrete[slideIndex].style.display = 'block';
    carrete[slideIndex].classList.add('fade');

    // aumentamos el contador del índice del carrete
    slideIndex++;

    // le damos un timeout para que se repita
    // setTimeout(showSlides, 3000);
    // cambia de imagen cada 3 segundos
}

// arrancamos la función
showSlides();
