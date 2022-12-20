//Verifica se o campo email tem menos de 3 caracteres 

document.getElementById("email").addEventListener(
    "keyup",
    (event) => {
        var email2 = document.querySelector("#email").value; //armazena o valor do campo email
        var mensagem2 = document.querySelector(".mensagemEmail");
        mensagem2.innerHTML = "";
        if (email2.length < 3){
            mensagem2.innerHTML = "Email inválido! É necessário ter no mínimo 3 caracteres";}
        else {
            mensagem2.innerHTML = "✔ Email válido!";
        }
    }
    ,
  false
);

//Verifica se o campo password tem menos de 3 caracteres

document.getElementById("password").addEventListener(
  "keyup",
    (event) => {
        var senha2 = document.querySelector("#password").value; //armazena o valor do campo password
        var mensagem2 = document.querySelector(".mensagemPassword");
        mensagem2.innerHTML = "";
        if (senha2.length < 3) {
            mensagem2.innerHTML = "Senha inválida! É necessário ter no mínimo 3 caracteres";
        }
        else {
          mensagem2.innerHTML = "✔ Senha válida!";
        }
    }
    ,
  false
);

document.getElementById("name").addEventListener(
    "keyup",
    (event) => {
        var name = document.querySelector("#name").value; //armazena o valor do campo email
        var mensagem = document.querySelector(".mensagemName");
        mensagem.innerHTML = "";
        if (name.length < 3){
            mensagem.innerHTML = "Nome Inválido! É necessário ter no mínimo 3 caracteres";}
        else {
            mensagem.innerHTML = "✔ Nome válido!";
        }
    }
    ,
  false
);

//Verifica se o campo password tem menos de 3 caracteres

document.getElementById("login").addEventListener(
  "keyup",
    (event) => {
        var senha = document.querySelector("#login").value;
        var senha2 = document.querySelector("#login").value; //armazena o valor do campo password
        var mensagem = document.querySelector(".mensagemLogin");
        mensagem.innerHTML = "";
        if (senha2.length < 3) {
            mensagem.innerHTML = "Login inválido! É necessário ter no mínimo 3 caracteres";
        }
        else {
            mensagem.innerHTML = "✔ Login válida!!";
        }
    }
    ,
  false
);



var button2 = document.querySelector('#btnCADASTRAR');
dialog2 = document.querySelector('.dialog2');
button2.addEventListener("click", function(){
    dialog2.className = 'dialog2 show';
});