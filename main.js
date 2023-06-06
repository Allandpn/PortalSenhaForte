


const getLocal = () => JSON.parse(localStorage.getItem("db_user")) ?? []

const setLocal = (db_user) => localStorage.setItem("db_user", JSON.stringify(db_user))

//CRUD - Read
const readUser = (index) => {
    const _user = getLocal();
    const user = _user[index];
    return user

}

const updateUser = (index, user) => {
    const db_user = getLocal()
    db_user[index] = user
    setLocal(db_user)
}

const deleteUser = (index, user) => {
    const db_user = getLocal()
    db_user.splice(index, 1)
    setLocal(db_user)
}



const updateTable = () => {
    console.log("teste")
    const user = readUser(0)
    document.getElementById('inputUsername01').value = user.usuario
    document.getElementById('inputEmail3').value = user.email
    document.getElementById('inputPassword01').value = user.senha
    document.getElementById('inputPassword02').value = user.senhaconfirma
    document.getElementById('inputFirstName01').value = user.nome
    document.getElementById('inputSobrenome01').value = user.sobrenome
    document.getElementById('inputDataNasc01').value = user.data
    document.getElementById('inputTelefone01').value = user.telnum
    document.getElementById('select-pais').value = user.pais
    document.getElementById('select-idioma').value = user.idioma
}



window.onload = updateTable


const isValideFields = () => {
    return document.getElementById('form-user-update').reportValidity()
}

const showModal = () => {
    $('#modalPerfil').modal('show')
}


const cadastrarUser = () => {
    const user = {
        "usuario": document.getElementById('inputUsername01').value,
        "nome": document.getElementById('inputFirstName01').value,
        "sobrenome": document.getElementById('inputSobrenome01').value,
        "email": document.getElementById('inputEmail3').value,
        "senha": document.getElementById('inputPassword01').value,
        "senhaconfirma": document.getElementById('inputPassword02').value,
        "data": document.getElementById('inputDataNasc01').value,
        "telnum": document.getElementById('inputTelefone01').value,
        "pais": document.getElementById('select-pais').value,
        "idioma": document.getElementById('select-idioma').value
    }

    updateUser(0, user)
    showModal()
}


document.getElementById("submit-botton-update")
    .addEventListener('click', cadastrarUser)



const togglePassword01 = document
    .getElementById('password_eye01');

togglePassword01.addEventListener('click', () => {
    const password = document.querySelector('#inputPassword01');
    const type = password
        .getAttribute('type') === 'password' ?
        'text' : 'password';
    password.setAttribute('type', type);
});

const togglePassword02 = document
    .getElementById('password_eye02');

togglePassword02.addEventListener('click', () => {
    const password2 = document.querySelector('#inputPassword02');
    const type = password2
        .getAttribute('type') === 'password' ?
        'text' : 'password';
    password2.setAttribute('type', type);
});










