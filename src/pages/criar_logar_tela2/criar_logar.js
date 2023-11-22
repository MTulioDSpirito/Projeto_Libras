document.addEventListener('DOMContentLoaded', function () {
    const botaoCriarPerfil = document.getElementById('botao-criar-perfil');
    botaoCriarPerfil.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = '/src/pages/cadastro_tela4/cadastro.html';
    });
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const botaoEntrar = document.getElementById('entrar');
    botaoEntrar.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = '/src/pages/login_tela3/login.html';
    });
  });

