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