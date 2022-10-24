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
window.onclick = function (event) {
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
let slideIndex = -1;

function showSlides() {

    // limpiamos el carrete
    for (let i = 0; i < carrete.length; i++) {
        carrete[i].style.display = 'none';
        carrete[i].classList.remove('fade');
    }
    // aumentamos el contador del índice del carrete
    slideIndex++;

    // mostrar la siguiente img
    if (slideIndex >= carrete.length) {
        // si el contador supera la longitud del carrete, se reinicia
        slideIndex = 0;
    }
    carrete[slideIndex].style.display = 'block';
    carrete[slideIndex].classList.add('fade');



    // le damos un timeout para que se repita
    setTimeout(showSlides, 8000);
    // cambia de imagen cada 3 segundos
}

//arrancamos la función
showSlides();


// Cambiar img con las flechas
function moveSlides(x) {

    // limpiamos el carrete
    for (let i = 0; i < carrete.length; i++) {
        carrete[i].style.display = 'none';
        carrete[i].classList.remove('fade');
    }

    // aumentamos el contador del índice del carrete
    slideIndex += x;
    // x es +1 si hemos pulsado la flecha de siguiente, por lo que el indice del
    // carrete aumenta en 1
    // y viceversa


    // mostrar la siguiente img
    if (slideIndex >= carrete.length) {
        // si el contador supera la longitud del carrete, se reinicia
        slideIndex = 0;

    } else if (slideIndex < 0) {
        // si pulsamos la flecha izquierda cuando el índice está en 0
        // volvemos a la última posición del carrete
        slideIndex = carrete.length - 1;
    }
    carrete[slideIndex].style.display = 'block';
    carrete[slideIndex].classList.add('fade');

}

// Cambiar imgs con los puntos/thumbnails/miniaturas
function chooseSlides(x) {

    // limpiamos el carrete
    for (let i = 0; i < carrete.length; i++) {
        carrete[i].style.display = 'none';
        carrete[i].classList.remove('fade');
    }

    slideIndex = x;
    carrete[slideIndex].style.display = 'block';
    carrete[slideIndex].classList.add('fade');
}

// Galería de imgs
//Al hacer clic
function showGallery(img) {
    // Contenedor de la img grande
    let expImg = document.getElementById('expImg');

    // Copiamos el src de la img clicada y se la asignamos a la grande
    expImg.src = img.src;

    // Le damos display al contenedor padre la img grande
    expImg.parentElement.style.display = 'block';

}







