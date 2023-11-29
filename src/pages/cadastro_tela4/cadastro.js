function salvarDados() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  // Recuperar o usuário do localStorage
  var usuarioExistente = JSON.parse(localStorage.getItem('usuario'));

  // Verificar se o e-mail já foi cadastrado
  if (usuarioExistente && usuarioExistente.email === email) {
      alert('Este e-mail já foi cadastrado!');
      return;
  }

  var usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));
  alert('USUÁRIO CRIADO COM SUCESSO !!');
  window.location.href = "../login_tela3/login.html";
}

// Adicionando evento de clique ao botão de cadastro
document.getElementById('validar').addEventListener('click', function (event) {
  event.preventDefault();
  salvarDados();
});

// Adicionando evento de clique ao botão de login
document.getElementById('login').addEventListener('click', function (event) {
  event.preventDefault();
  validarLogin();
});

function mostrarSenha() {
  var senha = document.getElementById("senha");
  if (senha.type === "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}