


  
  function checkAnswer() {
    let radios = document.getElementsByName('quiz');
     {for (let i = 0, length = radios.length; i < length; i++)
      if (radios[i].checked) {
        // Recupere a pontuação atual do armazenamento local e converta para um número. Se não houver pontuação salva, use 0.
        let points = Number(localStorage.getItem('points')) || 0;
        
        if(radios[i].value === 'L') {
          points += 3;
        }else
        points = 0
        // Salve a nova pontuação no armazenamento local.
        localStorage.setItem('points', points);
        break;
      }
    }
  }
  
  window.onload = function() {
    var gifElement = document.querySelector('.librasmao');
    setInterval(function() {
      var src = gifElement.src;
      gifElement.src = '';
      gifElement.src = src;
    }, 5000); // altere 5000 (5 segundos) para a duração da animação do seu GIF

    var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    if (usuarioLogado) {
      document.getElementById('user-info').textContent = usuarioLogado.nome;
    }
  }
  