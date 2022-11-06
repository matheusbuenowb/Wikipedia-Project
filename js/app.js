

//Verifica se o campo Email tem menos de 3 caracteres - tempo real
document.getElementById("email").addEventListener(
    "keyup",
    (event) => {
        var email = document.querySelector("#email").value;
        var wrapper = document.querySelector(".mensagemEmail");
        wrapper.innerHTML = "";
        if (email.length < 3){
            wrapper.innerHTML = "⚠ Email inválido!";}
        else {
            wrapper.innerHTML = "✔ Email válido!";
        }
    }
    ,
  false
);

//Verifica se o campo Senha tem menos de 3 caracteres - tempo real
document.getElementById("password").addEventListener(
  "keyup",
    (event) => {
        var senha = document.querySelector("#password").value;
        var wrapper = document.querySelector(".mensagemPassword");
        wrapper.innerHTML = "";
        if (senha.length < 3) {
            wrapper.innerHTML = "⚠ Senha inválida!";
        }
        else {
          wrapper.innerHTML = "✔ Senha válida!";
        }
    }
    ,
  false
);

var button = document.querySelector('#btnLOGIN');
dialog = document.querySelector('.dialog');
button.addEventListener("click", function(){
dialog.className = 'dialog show';
});

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

