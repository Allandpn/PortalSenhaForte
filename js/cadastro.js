
const getLocal = () => JSON.parse(localStorage.getItem("db_user")) ?? []

const setLocal = (db_user) => localStorage.setItem("db_user", JSON.stringify(db_user))


//CRUD - Create
const createUser = (user) => {
    const db_user = getLocal()
    db_user.push(user)
    setLocal(db_user)
}

const isValideFields = () => {
    return document.getElementById('form-user').reportValidity()
}


const submitForm = () => {
    $(".signup-container").hide();
    window.scrollTo(0, 0);
    setTimeout(CarregaSpinner, 150);
    setTimeout(ExibeSpinner, 500);
}

function CarregaSpinner() {

    $(".text-center").show();
};

function ExibeSpinner() {
    $(".text-center").hide();
    setTimeout(EfetivaCadastro, 200);
}

function EfetivaCadastro() {
    $(".mensage-sucess-text").show();
    setTimeout(function () {
        window.location.href = "home_login.html";
    }, 1000);
}



const cadastrarUser = () => {
    console.log("teste")
    if (isValideFields()) {
        const user = {
            "usuario": document.getElementById('input-usuario').value,
            "nome": document.getElementById('input-name').value,
            "sobrenome": document.getElementById('input-sobrenome').value,
            "email": document.getElementById('input-email').value,
            "senha": document.getElementById('input-password').value,
            "senhaconfirma": document.getElementById('input-password-confirm').value,
            "data": document.getElementById('input-natanascimento').value,
            "telnum": document.getElementById('input-telefone').value,
            "pais": document.getElementById('select-pais').value,
            "idioma": document.getElementById('select-idioma').value
        }

        createUser(user)
        submitForm()
    }
}

document.getElementById("submit-form-button")
    .addEventListener('click', cadastrarUser)