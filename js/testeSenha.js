//import { zxcvbn } from './zxcvbn.js'


document.getElementById("campoSenha").addEventListener("input", testarSenha);

function testarSenha() {
    var input = document.getElementById("campoSenha");
    var password = input.value;
    var result = zxcvbn(password);
   // var resultSenha = document.getElementById("resultSenha");
    //var result = zxcvbn(resultSenha);

    if (resultSenha !== undefined && resultSenha !== null) {
        resultSenha.textContent = "teste2222";
      }
    
    
    switch (result.score) {
        case 0:
            console.log("Senha muito fácil de advinhar, número de tentativas necessárias abaixo de 10^3");
            break;
        case 1:
            console.log("Senha fácil de advinhar, número de tentativas necessárias abaixo de 10^6");
            break;
        case 2:
            console.log("senha com força mediana, número de tentativas necessárias abaixo de 10^8");
            break;
        case 3:
            console.log("senha segura, número de tentativas necessárias abaixo de 10^10");
            break;
        case 4:
            console.log("senha muito segura, número de tentativas necessárias acima de 10^10");
            break;
    }

       

    console.log("Número de tentativas necessárias para quebrar a senha por método de força bruta "+ (result.guesses/1000).toFixed(0) + " mil");
    
    crackTimes  = result.crack_times_seconds
    
    if (crackTimes.online_throttling_100_per_hour < 3600*24*30){
        console.log("Tempo gasto para invadir um sistema com limitação de acesso, 100 acessos por hora " + (crackTimes.online_throttling_100_per_hour/3600).toFixed(1) + " horas");
    } else if (crackTimes.online_throttling_100_per_hour < 3600*24*30*365) {
        console.log("Tempo gasto para invadir um sistema com limitação de acesso, 100 acessos por hora " + (crackTimes.online_throttling_100_per_hour/(3600*24*30)).toFixed(0) + " meses");
    } else {
        console.log("Tempo gasto para invadir um sistema com limitação de acesso, 100 acessos por hora " + (crackTimes.online_throttling_100_per_hour/(3600*24*30*365)).toFixed(0) + " anos");
    }

    if (crackTimes.online_no_throttling_10_per_second < 3600*24*30){
        console.log("Tempo gasto para invadir um sistema com limitação de acesso, 10 acessos por segundo (36k/hora) " + (crackTimes.online_no_throttling_10_per_second/3600).toFixed(1) + " horas");
    } else if (crackTimes.online_no_throttling_10_per_second < 3600*24*30*365) {
        console.log("Tempo gasto para invadir um sistema com limitação de acesso, 10 acessos por segundo (36k/hora) " + (crackTimes.online_no_throttling_10_per_second/(3600*24*30)).toFixed(0) + " meses");
    } else {
        console.log("Tempo gasto para invadir um sistema com limitação de acesso, 10 acessos por segundo (36k/hora) " + (crackTimes.online_no_throttling_10_per_second/(3600*24*30*365)).toFixed(0) + " anos");
    }


    function changeColor() {
        var div1 = document.getElementById("barra-senha-01");
        var div2 = document.getElementById("barra-senha-02");
        var div3 = document.getElementById("barra-senha-03");
        var div4 = document.getElementById("barra-senha-04");
              
        if (result.score === 0) {
            div1.style.backgroundColor = "red";
            div2.style.backgroundColor = "white";
            div3.style.backgroundColor = "white";
            div4.style.backgroundColor = "white";
        } else if (result.score === 1) {
            div1.style.backgroundColor = "red";
            div2.style.backgroundColor = "orange";
            div3.style.backgroundColor = "white";
            div4.style.backgroundColor = "white";
        } else if (result.score === 2) {
            div1.style.backgroundColor = "red";
            div2.style.backgroundColor = "orange";
            div3.style.backgroundColor = "green";
            div4.style.backgroundColor = "white";
        } else if (result.score === 3 || 4) {
            div1.style.backgroundColor = "red";
            div2.style.backgroundColor = "orange";
            div3.style.backgroundColor = "green";
            div4.style.backgroundColor = "blue";
        } else if (result.score === 4) {
            div1.style.backgroundColor = "red";
            div2.style.backgroundColor = "orange";
            div3.style.backgroundColor = "green";
            div4.style.backgroundColor = "blue";
        }

      }

      
}

