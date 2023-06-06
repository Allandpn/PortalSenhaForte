//import { zxcvbn } from './zxcvbn.js'


document.getElementById("campoSenha").addEventListener("change", testarSenha);

function testarSenha() {
    //var inputSenha = document.getElementById("campoSenha");
   // var resultSenha = document.getElementById("resultSenha");
    //var result = zxcvbn(resultSenha);

    if (resultSenha !== undefined && resultSenha !== null) {
        resultSenha.textContent = "teste2222";
      }
    

    
    console.log('algo mudou');
      
}

