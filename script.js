function responder(opcao) {
  let resultado = document.getElementById("resultado");

  if (opcao === "b") {
    resultado.innerHTML = "✅ Correto! Agro sustentável é produção com equilíbrio ambiental.";
    resultado.style.color = "green";
  } else {
    resultado.innerHTML = "❌ Resposta incorreta. Pense no equilíbrio com a natureza.";
    resultado.style.color = "red";
  }
}
