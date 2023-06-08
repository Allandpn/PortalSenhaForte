
//Visualização de password

const togglePassword01 = document
    .getElementById('password_eye');

togglePassword01.addEventListener('click', () => {
    const password = document.querySelector('#inputSenha');
    const type = password
        .getAttribute('type') === 'text' ?
        'password' : 'text';
    password.setAttribute('type', type);
});



document.getElementById("inputSenha").addEventListener("input", testarSenha);

function testarSenha() {
    var input = document.getElementById("inputSenha");
    var outputSenha01 = document.getElementById("result-senha-01");
    var outputSenha02 = document.getElementById("result-senha-02");
    var outputSenha03 = document.getElementById("result-senha-03");
    var outputSenha04 = document.getElementById("result-senha-04");
    var password = input.value;
    var result = zxcvbn(password);
  
    
    //Popula campo resultado geral
    if (password == undefined || password == null || password == "") {
      outputSenha01.textContent = "";
      
    }   
    
    switch (result.score) {
 
      
        case 0:
            outputSenha01.textContent = "Senha muito fácil de advinhar, número de tentativas necessárias abaixo de 10^3";
            break;
        case 1:
            outputSenha01.textContent = "Senha fácil de advinhar, número de tentativas necessárias abaixo de 10^6";
            break;
        case 2:
            outputSenha01.textContent = "Senha com força mediana, número de tentativas necessárias abaixo de 10^8";
            break;
        case 3:
            outputSenha01.textContent = "Senha segura, número de tentativas necessárias abaixo de 10^10";
            break;
        case 4:
            outputSenha01.textContent = "senha muito segura, número de tentativas necessárias acima de 10^10";
            break;
    }

       
    //Popula campo Número de tentativas necessárias para quebrar segurança
    if (password == undefined || password == null || password == "") {
      outputSenha02.textContent = "";
      
    } else if (result.guesses < 1000){
      outputSenha02.textContent = "Número de tentativas necessárias para quebrar a senha por método de força bruta "+ (result.guesses).toFixed(0) + " vezes";
    } else {
      outputSenha02.textContent = "Número de tentativas necessárias para quebrar a senha por método de força bruta "+ (result.guesses/1000).toFixed(0) + " mil vezes";
    }


    // Popula campos tempo gasto com e sem limitação de acesso em ataques
    crackTimes  = result.crack_times_seconds;
    
    if (password == undefined || password == null || password == "") {
      outputSenha03.textContent = "";
      
    } else if (crackTimes.online_throttling_100_per_hour < 3600*24*30){

      outputSenha03.textContent = "Tempo gasto para invadir um sistema com limitação de acesso, 100 acessos por hora " +
       (crackTimes.online_throttling_100_per_hour/3600).toFixed(1) + " hora(s)"; 

    } else if (crackTimes.online_throttling_100_per_hour < 3600*24*30*365) {

      outputSenha03.textContent = "Tempo gasto para invadir um sistema com limitação de acesso, 100 acessos por hora "
       + (crackTimes.online_throttling_100_per_hour/(3600*24*30)).toFixed(0) + " mes(es)";
      
    } else {

      outputSenha03.textContent = "Tempo gasto para invadir um sistema com limitação de acesso, 100 acessos por hora "
       + (crackTimes.online_throttling_100_per_hour/(3600*24*30*365)).toFixed(0) + " ano(s)";
        
    }


    if (password == undefined || password == null || password == "") {
      outputSenha04.textContent = "";

    } else if (crackTimes.online_no_throttling_10_per_second < 3600*24*30){

      outputSenha04.textContent = "Tempo gasto para invadir um sistema com limitação de acesso, 10 acessos por segundo (36k/hora) "
       + (crackTimes.online_no_throttling_10_per_second/3600).toFixed(1) + " horas";

    } else if (crackTimes.online_no_throttling_10_per_second < 3600*24*30*365) {

      outputSenha04.textContent = "Tempo gasto para invadir um sistema com limitação de acesso, 10 acessos por segundo (36k/hora) "
       + (crackTimes.online_no_throttling_10_per_second/(3600*24*30)).toFixed(0) + " meses";
        
    } else {

      outputSenha04.textContent = "Tempo gasto para invadir um sistema com limitação de acesso, 10 acessos por segundo (36k/hora) "
       + (crackTimes.online_no_throttling_10_per_second/(3600*24*30*365)).toFixed(0) + " anos"
        
    }


    // Edita barras que indicam segurança conforme o preenchimento da senha
    var div1 = document.getElementById("barra-senha-01");
    var div2 = document.getElementById("barra-senha-02");
    var div3 = document.getElementById("barra-senha-03");
    var div4 = document.getElementById("barra-senha-04");
      
    
    if (password == undefined || password == null || password == "") {
        div1.style.backgroundColor = "white";
        div2.style.backgroundColor = "white";
        div3.style.backgroundColor = "white";
        div4.style.backgroundColor = "white";
    } else if (result.score === 0) {
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

