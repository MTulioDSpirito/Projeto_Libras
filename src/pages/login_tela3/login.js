// Função para validar o login do usuário
function validarLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    var usuario = JSON.parse(localStorage.getItem('usuario'));
  
    if (email == usuario.email && senha == usuario.senha) {
      alert('Login bem sucedido!');
      window.location.href = '/src/pages/home_tela05/home.html'; // Redireciona para a página inicial
    } else {
      alert('Email ou senha incorretos!');
    }
  }
  
  
  // Adicionando evento de clique ao botão de login
  document.getElementById('login').addEventListener('click', function (event) {
    event.preventDefault();
    validarLogin();
  });
  
  
  