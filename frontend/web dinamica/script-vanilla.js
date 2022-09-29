// Botón que abra un formulario modal
const btnLogin = document.getElementById('btnLogin');
const modalForm = document.getElementById('loginForm');

btnLogin.addEventListener('click', () => {
    modalForm.style.display = 'block';
})

// Botón que cierre el modal
const btnClose = document.getElementById('btnClose');

btnClose.addEventListener('click', () => {
    modalForm.style.display = 'none';
})