//Verifica se o campo email tem menos de 3 caracteres 

document.getElementById("login").addEventListener(
    "keyup",
    (event) => {
        var email = document.querySelector("#login").value; //armazena o valor do campo email
        var mensagem = document.querySelector(".mensagemLogin");
        mensagem.innerHTML = "";
        if (email.length < 3){
            mensagem.innerHTML = "Login inválido! É necessário ter no mínimo 3 caracteres";}
        else {
            mensagem.innerHTML = "✔ Login válido!";
        }
    }
    ,
  false
);

//Verifica se o campo password tem menos de 3 caracteres

document.getElementById("password").addEventListener(
  "keyup",
    (event) => {
        var senha = document.querySelector("#password").value; //armazena o valor do campo password
        var mensagem = document.querySelector(".mensagemPassword");
        mensagem.innerHTML = "";
        if (senha.length < 3) {
            mensagem.innerHTML = "Senha inválida! É necessário ter no mínimo 3 caracteres";
        }
        else {
          mensagem.innerHTML = "✔ Senha válida!";
        }
    }
    ,
  false
);

//Utilizamos o exemplo da função dialog de JS vista em aula para acionar a ação de mostrar a tela de login 
//e os resultados, sendo ste por último apenas se o usuário digitou alguma coisa no campo de input

var button = document.querySelector('#btnLOGIN');
dialog = document.querySelector('.dialog');
button.addEventListener("click", function(){
    dialog.className = 'dialog show';
});



//Função usada para buscar possíveis resultados da pesquisa
//Tivemos muita dificuldade e não conseguimos encontrar uma API adequada para o projeto
//A API mais próxima foi a Quran da url https://quran.api-docs.io/v4/search/KfCmk4KQYbtyK9adj
//No entanto, ela não funcionou como esperávamos no momento de mostrar os resultados na página,
//logo optamos por deixar a openlibrary padrão também visto em aula.
//Para funcionar é necessário digitar algo válido no campo de texto e clicar na lupa de pesquisar

var container = document.querySelector("ul");
document.querySelector("#btnSearch").addEventListener("click", function () {
var query = document.querySelector("input").value;
axios
    .get("https://openlibrary.org/search.json?q=" + query)
    .then(function (res) {
    var docs = res.data.docs;
    for (var i = 0; i < docs.length && i < 10; i++) {
        var li = document.createElement("li"),
        img = document.createElement("img"),
        cover_id = docs[i].cover_edition_key;
        li.innerHTML = docs[i].title_suggest;
        img.src =
        "https://covers.openlibrary.org/b/olid/" + cover_id + ".jpg";
        li.appendChild(img);
        container.appendChild(li);
    }
    });
});


axios.get('/campoViews')
    .then(function (response) {
        console.log(response);
        //Sessao ativa e administrador
        if (response.status == 200) {
            let visualizacoes = document.querySelector('.mensagemViews');
            visualizacoes.innerHTML = "Visualizações: " + response.data;
        }
    })
    .catch(function (error) {
    });

document.getElementById("email2").addEventListener(
    "keyup",
    (event) => {
        console.log(response);
        //Sessao ativa e administrador
        if (response.status == 200) {
            var visualizacoes = document.querySelector('.mensagemViews');
            visualizacoes.innerHTML = "Visualizações: " + response.data;
        }
    }
    ,
  false
);
