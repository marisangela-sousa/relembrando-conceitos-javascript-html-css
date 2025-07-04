const tituloPrincipal = document.getElementById("titulo-principal");
tituloPrincipal.style.color = "white";
tituloPrincipal.style.backgroundColor = "green";

const allOrangeJuice = document.getElementsByClassName("orange juice");
allOrangeJuice[0].style.color = "red";

const up = document.getElementsByName("up");
// up.style.color = "blue";

const titulo = document.getElementsByTagName("h1");
// titulo.style.color("blue");

let tagP = document.querySelector("p");
tagP.textContent = "Novo texto";

let novaTagP = document.querySelector(".tag").style.color = "blue";

let h2 = document.querySelector("h2").style.color = "red";

const p = document.createElement("p");
p.innerHTML = "Nova tag P com JS";
p.classList.add("tagP");
document.body.appendChild(p);


const inputPreco = document.querySelector("#preco");
const inputQuantidade = document.querySelector("#quantidade");
const button = document.querySelector("#enviar");
const valor = document.querySelector("#valor");

button.addEventListener("click", function(){
    const preco = inputPreco.value;
    const quantidade = inputQuantidade.value;

    const valorTotal = Number(preco) * Number(quantidade);

    valor.innerHTML = valorTotal;
})
