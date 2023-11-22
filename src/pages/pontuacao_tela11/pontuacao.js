
window.onload = function() {
  var usuario = JSON.parse(localStorage.getItem('usuario'));
  if(usuario) {
    document.getElementById('user-info').textContent = usuario.nome;
  }

  
  // Recupere a pontuação total do armazenamento local e converta para um número. Se não houver pontuação salva, use 0.
  let points = Number(localStorage.getItem('points')) || 0;
  // Exiba a pontuação total na tela.
let questions = points / 3;
// Exiba o resultado do usuário na tela, usando o elemento <p> com id="result".
document.getElementById('result').innerText = 'Você acertou ' + questions + ' questão(ões)';
// Exiba a pontuação total na tela, usando o elemento <p> com id="score".
  document.getElementById('score').innerText = points;
  // Altere o tamanho e a cor do texto com base na pontuação.
  let scoreElement = document.getElementById('score');
  let messageElement = document.getElementById('message');
  scoreElement.style.fontSize = '2em';
  if (points <= 3) {
    scoreElement.style.color = 'red';
    messageElement.style.color = 'red';
    messageElement.innerText = 'Infelizmente não foi dessa vez, clique abaixo e recomece novamente';
  } else if (points <= 6) {
    scoreElement.style.color = 'darkorange';
    messageElement.style.color = 'darkorange';
    messageElement.innerText = 'Ótimo trabalho';
  } else if (points == 9) {
    scoreElement.style.color = 'green';
    messageElement.style.color = 'green';
    messageElement.innerText = 'Parabéns, você brilhou';
  }
}