function responder(resposta) {
  const mensagem = document.getElementById("resposta");
  if (resposta === "certo") {
    mensagem.textContent = "✅ Isso mesmo! O campo fornece alimentos essenciais.";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "❌ Ops! Tente de novo.";
    mensagem.style.color = "red";
  }
}