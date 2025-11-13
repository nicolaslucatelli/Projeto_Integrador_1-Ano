document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("usuarioLogado");
  if (!user) {
    window.location.href = "login.html";
    return;
  }
  document.getElementById("nomeUsuario").textContent = user;
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
  });
});
