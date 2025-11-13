document.getElementById("btnLogin").addEventListener("click", () => {
  const user = document.getElementById("usuario").value.trim();
  const pass = document.getElementById("senha").value.trim();
  const msg = document.getElementById("msg");

  if (!user || !pass) {
    msg.textContent = "Por favor, preencha todos os campos.";
    msg.style.color = "#d4af37";
    return;
  }

  localStorage.setItem("usuarioLogado", user);
  msg.textContent = `Bem-vindo, ${user}. Redirecionando...`;
  msg.style.color = "#d4af37";

  setTimeout(() => {
    if (sessionStorage.getItem("compraPendente")) {
      sessionStorage.removeItem("compraPendente");
      window.location.href = "compra.html";
    } else {
      window.location.href = "perfil.html";
    }
  }, 1500);
});
