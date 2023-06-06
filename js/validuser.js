const userTemp = {
    index: 0,
    nome: "",
    usuario: "",
    senha: "",
}






const validUser = () => {
    const user = JSON.parse(localStorage.getItem("db_user")) ?? []
    const usuario = document.getElementById('input-login-user').value
    const password = document.getElementById("input-login-password").value


    user.forEach((user) => {
        if (user.usuario == usuario && user.senha == password) {
            userTemp.usuario = user.usuario
            userTemp.senha = user.senha
            userTemp.nome = user.nome
        }
    })



    if (usuario.length > 0 && password.length > 0) {

        console.log(usuario.length)
        console.log(password.length)
        if (userTemp.usuario == usuario && userTemp.senha == password) {
            window.location.href = "/html/home_login.html"
            const token = Math.random().toString(16).substring(2)
            localStorage.setItem('token', token)

        } else {
            document.getElementById('input-login-user').setAttribute("style", 'border-color: red')
            document.getElementById('input-login-password').setAttribute("style", 'border-color: red')
            document.getElementById('msg-error').setAttribute("style", 'display: block')
            document.getElementById('input-login-user').focus()
        }
    }
}

document.getElementById("button-logina").addEventListener('click',
    validUser)
