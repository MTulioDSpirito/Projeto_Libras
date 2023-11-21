window.onload = function() {
  var usuario = JSON.parse(localStorage.getItem('usuario'));
  if(usuario) {
    document.getElementById('user-info').textContent = usuario.nome;
  }
  // Recupere a pontuação total do armazenamento local e converta para um número. Se não houver pontuação salva, use 0.
  let points = Number(localStorage.getItem('points')) || 0;
  // Exiba a pontuação total na tela.
  document.getElementById('score').innerText = points;
}
