
const tempUser = {
    usuario: "Casa",
    nome: "Fernando",
    sobrenome: "Antonio",
    email: "allandpn@hotmail.com",
    senha: "12345",
    senhaconfirma: "12345",
    data: "08/06/1988",
    telddd: "49",
    telnum: "999892939",
    pais: "Brasil",
    idioma: "Portugues"
}

const getLocal = () => JSON.parse(localStorage.getItem("db_user")) ?? []

const setLocal = (db_user) => localStorage.setItem("db_user", JSON.stringify(db_user))


//CRUD - Create
const createUser = (user) => {
    const db_user = getLocal()
    db_user.push(user)
    setLocal(db_user)
}

//CRUD - Read
const readUser = (index) => {
    const _user = getLocal();
    const user_r = _user[index];
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



//  Formularios

const submitForm = () => {
    console.log("teste3")
    $(".signup-container").hide();
    window.scrollTo(0, 0);
    setTimeout(() => {
        $(".text-center").show() 
    }, 150);
    setTimeout(() => {
        $(".text-center").hide();
    }, 1500);
    setTimeout(() => {
        $(".mensage-sucess-text").show();
    setTimeout(function () {
        window.location.href = "home_login.html";
    }, 1000);
    }, 200);
}


const isValideFields = () => {
    return document.getElementById('form-user').reportValidity()
}


const cadastrarUser = () => {
    if (isValideFields()) {
        const user = {
            usuario: document.getElementById('input-usuario').value,
            nome: document.getElementById('input-name').value,
            sobrenome: document.getElementById('input-sobrenome').value,
            email: document.getElementById('input-email').value,
            senha: document.getElementById('input-password').value,
            senhaconfirma: document.getElementById('input-password-confirm').value,
            data: document.getElementById('input-natanascimento').value,            
            telnum: document.getElementById('input-telefone').value,
            pais: document.getElementById('select-pais').value,
            idioma: document.getElementById('select-idioma').value
        }

        createUser(user)        
        submitForm()        
    }
}



// Eventos
document.getElementById("submit-form-button")
  .addEventListener('click', cadastrarUser)


