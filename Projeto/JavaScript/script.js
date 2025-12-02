// Simula usuário logado
function mostrarUsuario() {
  const userGreeting = document.getElementById("userGreeting");
  const usuario = localStorage.getItem("usuario");
  if (usuario) {
    userGreeting.textContent = `Olá, ${usuario}`;
  } else {
    userGreeting.textContent = "Visitante";
  }
}

// Simula verificar se usuário está logado
function verificarLogin() {
  const usuario = localStorage.getItem("usuario");
  if (!usuario) {
    // redireciona para login ou mostra mensagem
    // window.location.href = "login.html";
  }
}

// Simula logout
function logoutUsuario() {
  localStorage.removeItem("usuario");
  alert("Você saiu do sistema.");
  window.location.href = "index.html";
}

// Função comprar (simples toast)
function comprar(nomeCarro, preco) {
  const toast = document.createElement("div");
  toast.textContent = `Compra simulada: ${nomeCarro} por R$ ${preco.toLocaleString('pt-BR')}`;
  toast.className = "toast";
  document.getElementById("toastContainer").appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}
function carregarProduto() {
  const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));
  if (!produto) return;

  const div = document.getElementById("resumo-produto");
  div.innerHTML = `
    <p><strong>Produto:</strong> ${produto.nome}</p>
    <p><strong>Valor:</strong> R$ ${produto.preco.toLocaleString('pt-BR')}</p>
    <hr/>
  `;
}

document.getElementById("paymentForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Compra finalizada com sucesso!");
  localStorage.removeItem("produtoSelecionado");
  window.location.href = "index.html";
});
function comprar(nomeCarro, preco) {
  const produto = { nome: nomeCarro, preco };
  localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
  window.location.href = "pagamento.html";
}
