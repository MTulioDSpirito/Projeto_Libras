
window.onload = function() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario) {
      document.getElementById('user-info').textContent = usuario.nome;
    }
    
}

function checkAnswer() {
  let radios = document.getElementsByName('quiz');
   {for (let i = 0, length = radios.length; i < length; i++)
    if (radios[i].checked) {
      // Recupere a pontuação atual do armazenamento local e converta para um número. Se não houver pontuação salva, use 0.
      let points = Number(localStorage.getItem('points')) || 0;
    
      if(radios[i].value === 'M') {
        points += 3;
      }
      // Salve a nova pontuação no armazenamento local.
      localStorage.setItem('points', points);
      break;
    }
  }
}
