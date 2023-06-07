

const togglePassword01 = document
    .getElementById('password_eye');

togglePassword01.addEventListener('click', () => {
    const password = document.querySelector('#inputSenha');
    const type = password
        .getAttribute('type') === 'text' ?
        'password' : 'text';
    password.setAttribute('type', type);
});