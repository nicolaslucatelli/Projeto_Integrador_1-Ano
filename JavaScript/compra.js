document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkoutForm");
  const mensagem = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validação simples
    const pagamentoSelecionado = document.querySelector('input[name="pagamento"]:checked');
    if (!pagamentoSelecionado) {
      mensagem.style.display = "block";
      mensagem.innerHTML = "⚠️ Por favor, selecione uma forma de pagamento.";
      mensagem.style.color = "#ff5555";
      return;
    }

    // Exibe mensagem de sucesso profissional
 mensagem.style.display = "block";
    mensagem.style.color = "#ffd700";
    mensagem.innerHTML = `
      ✅ Pedido finalizado com sucesso!
      <span>Forma de pagamento: <strong>${pagamentoSelecionado.value}</strong></span>
    `;

    // Desativa o botão para evitar duplo envio
    const botao = form.querySelector(".botao");
    botao.disabled = true;
    botao.style.opacity = "0.7";
    botao.style.cursor = "not-allowed";

    // Delay de 1 segundo antes do redirecionamento
    setTimeout(() => {
      window.location.href = "index.html"; // redireciona
    }, 3000);
  });
});
