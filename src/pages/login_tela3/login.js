




// Função para validar o login do usuário
function validarLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    var usuario = JSON.parse(localStorage.getItem('usuario'));
  
    if (email == usuario.email && senha == usuario.senha) {
      alert('Login bem sucedido!');
      window.location.href = '../home_tela05/home.html'; // Redireciona para a página inicial
    }
     else if (email === 'adm@gmail.com' && senha === 'admin') {
        // Redirecionar para a página de administração
        window.location.href = '../tela_admin/admin.html';
      } 
     else {
      alert('Email ou senha incorretos!');
    }
  
}
  
  // Adicionando evento de clique ao botão de login
  document.getElementById('login').addEventListener('click', function (event) {
    event.preventDefault();
    validarLogin();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const botaoCriarPerfil = document.getElementById('botao-criar-perfil');
    botaoCriarPerfil.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = '../cadastro_tela4/cadastro.html';
    });
  });
  

  
  