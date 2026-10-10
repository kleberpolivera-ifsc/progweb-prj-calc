function digitar(valor) {
  const ehNumero =
    valor === "." ||
    (valor >= "0" && valor <= "9");

  if (ehNumero && visor.textContent === "0") {
    visor.textContent = valor;
  } else {
    visor.textContent += valor;
  }
}


function calcular() {
  try {
    var resultado = eval(visor.textContent);
    if (resultado === Infinity){
        resultado = 0;
    }
    visor.textContent =resultado;
  } catch (erro) {
    visor.textContent = "Erro";
  }
}

function limpar() {
  visor.textContent = "0";
}

// Um único listener para
// TODOS os botões numéricos/operadores
document.querySelectorAll("[data-valor]")
  .forEach(function (botao) {
    botao.addEventListener(
      "click", function () {
        digitar(botao.dataset.valor);
    });
  });

document.getElementById("btn-igual")
  .addEventListener("click", calcular);
document.getElementById("btn-limpar")
  .addEventListener("click", limpar);

//PWA

if ("serviceWorker" in navigator) {
  window.addEventListener("load",
    function () {
      navigator.serviceWorker
        .register("sw.js");
  });
}
