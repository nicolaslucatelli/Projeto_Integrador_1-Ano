document.addEventListener("DOMContentLoaded", () => {
  const carro = JSON.parse(localStorage.getItem("carroDetalhes"));
  const container = document.getElementById("carroInfo");

  if (!carro) {
    container.innerHTML = "<p>Carro não encontrado.</p>";
    return;
  }

  const descricao = {
    "Rolls-Royce": "Um ícone de requinte e silêncio absoluto. O Rolls-Royce Ghost oferece conforto inigualável e desempenho elegante.",
    "Bentley": "Luxo artesanal e força bruta em perfeita harmonia. O Continental GT é sinônimo de poder refinado.",
    "Lamborghini": "A fusão entre velocidade e design arrojado. O Aventador SVJ é uma verdadeira obra de arte sobre rodas.",
    "Ferrari": "A pura emoção italiana. O 812 GTS combina desempenho e beleza clássica de Maranello.",
    "Aston Martin": "Elegância britânica e alma esportiva. O DB11 redefine o conceito de grand tourer."
  };

  container.innerHTML = `
    <div class="detalhes-grid">
      <div class="detalhes-img">
        <img src="https://source.unsplash.com/800x500/?${carro.marca}-${carro.modelo}" alt="${carro.modelo}">
      </div>
      <div class="detalhes-info">
        <h2>${carro.marca} ${carro.modelo}</h2>
        <p>${descricao[carro.marca] || "Um carro de luxo incomparável."}</p>
        <h3>Preço: R$ ${(carro.preco || 2500000).toLocaleString()}</h3>
        <button class="gold-btn" onclick="irParaCompra()">Comprar Agora</button>
      </div>
    </div>
  `;
});

function irParaCompra() {
  const user = localStorage.getItem("usuarioLogado");
  if (!user) {
    sessionStorage.setItem("compraPendente", "true");
    window.location.href = "login.html";
  } else {
    window.location.href = "compra.html";
  }
}