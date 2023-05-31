
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

const getLocal = () =>  JSON.parse(localStorage.getItem("db_user")) ?? [] 

const setLocal = (db_user) => localStorage.setItem("db_user", JSON.stringify(db_user))


//CRUD - Create
const createUser = (user) => {    
  const db_user = getLocal()
    db_user.push (user)
    setLocal(db_user)
}

//CRUD - Read
const readUser = () => getLocal()


const updateUser = (index, user) => {
    const db_user = readUser()
    db_user[index] = user
    setLocal(db_user)
}

const deleteUser = (index, user) => {
    const db_user = readUser()
    db_user.splice(index,1)
    setLocal(db_user)
}




document.getElementById()
.addEventListener('click', salvarUser)