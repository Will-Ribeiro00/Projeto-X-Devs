
const cartoes = document.querySelectorAll(".cartao");

const botaoAvancar = document.getElementById("btn-avancar");
const botaoRetornar = document.getElementById("btn-voltar");

let cartaoAtual = 0;

botaoAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    
    RemoverCartaoSelecionado();
    cartaoAtual++;
    MostrarCartao();
});

botaoRetornar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    
    RemoverCartaoSelecionado();
    cartaoAtual--;
    MostrarCartao();
});



function MostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function RemoverCartaoSelecionado() {    
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

