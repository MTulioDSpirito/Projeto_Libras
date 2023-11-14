// Função para salvar os dados do usuário no localStorage
function salvarDados() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    var usuario = {
      nome: nome,
      email: email,
      senha: senha
    };
  
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  
  
  // Adicionando evento de clique ao botão de cadastro
  document.getElementById('validar').addEventListener('click', function (event) {
    event.preventDefault();
    salvarDados();
  
    alert('USUÁRIO CRIADO COM SUCESSO !!');
    window.location.href = "C:/Projeto_Libras/src/pages/login_tela3/login.html";
  });
  
  // Adicionando evento de clique ao botão de login
  document.getElementById('login').addEventListener('click', function (event) {
    event.preventDefault();
    validarLogin();
  });