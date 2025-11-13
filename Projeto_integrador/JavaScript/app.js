document.addEventListener("DOMContentLoaded", () => {
  const carros = [
    { marca: "Rolls-Royce", modelo: "Ghost", preco: 2800000, imagem: "https://images.unsplash.com/photo-1624562283995-cd9b5f5d62f4" },
    { marca: "Bentley", modelo: "Continental GT", preco: 1900000, imagem: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d" },
    { marca: "Lamborghini", modelo: "Aventador SVJ", preco: 3500000, imagem: "https://images.unsplash.com/photo-1617814070897-1d7cc72f8a1a" },
    { marca: "Ferrari", modelo: "812 GTS", preco: 3400000, imagem: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6a4" },
    { marca: "Aston Martin", modelo: "DB11", preco: 1500000, imagem: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d" }
  ];

  const container = document.getElementById("carrosDestaque");
  if (container) {
    carros.forEach(c => {
      const div = document.createElement("div");
      div.classList.add("carro");
      div.innerHTML = `
        <img src="${c.imagem}" alt="${c.modelo}">
        <div class="carro-content">
          <h3>${c.marca} ${c.modelo}</h3>
          <p>Preço: R$ ${c.preco.toLocaleString()}</p>
          <button class="gold-btn" onclick="verDetalhes('${c.marca}', '${c.modelo}')">Ver detalhes</button>
        </div>
      `;
      container.appendChild(div);
    });
  }

  // Controle de login
  const user = localStorage.getItem("usuarioLogado");
  const loginLink = document.getElementById("loginLink");
  const logoutLink = document.getElementById("logoutLink");

  if (user) {
    loginLink.style.display = "none";
    logoutLink.style.display = "inline";
    logoutLink.onclick = () => {
      localStorage.removeItem("usuarioLogado");
      window.location.reload();
    };
  } else {
    logoutLink.style.display = "none";
  }
});

function verDetalhes(marca, modelo) {
  localStorage.setItem("carroDetalhes", JSON.stringify({ marca, modelo }));
  window.location.href = "detalhes.html";
}
