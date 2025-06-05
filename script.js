function corrigirQuiz() {
  let total = 0;

  const resposta1 = document.querySelector('input[name="pergunta1"]:checked');
  const resposta2 = document.querySelector('input[name="pergunta2"]:checked');
  const resposta3 = document.querySelector('input[name="pergunta3"]:checked');

  if (resposta1 && resposta1.value === "b") total++;
  if (resposta2 && resposta2.value === "c") total++;
  if (resposta3 && resposta3.value === "b") total++;

  const resultado = document.getElementById("resultadoQuiz");

  if (!resposta1 || !resposta2 || !resposta3) {
    resultado.innerText = "😬 Responde tudo aí, poxa! Tem pergunta faltando.";
    return;
  }

  if (total === 3) {
    confettiCelebration();
    resultado.innerText = "🥳 UAU! Você conhece a Amanda quase melhor que ela mesma!";
  } else if (total === 2) {
    resultado.innerText = "🤔 Mandou bem, mas ainda tem o que aprender sobre a lenda Amanda.";
  } else {
    resultado.innerText = "😵 Opa! Tu conhece mesmo a Amanda? Bora voltar pro começo e estudar mais.";
  }
}
function confettiCelebration() {
  const confetti = document.createElement("div");
  confetti.innerText = "🎉🎉🎉";
  confetti.style.fontSize = "3rem";
  confetti.style.textAlign = "center";
  confetti.style.marginTop = "1rem";
  document.getElementById("resultadoQuiz").appendChild(confetti);
}

