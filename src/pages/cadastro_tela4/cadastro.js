
function salvarDados() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  // Recuperar os usuários do localStorage
  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verificar se o e-mail já foi cadastrado
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === email) {
      alert('Este e-mail já foi cadastrado!');
      return;
    }
  }

  var usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  // Adicionar o novo usuário ao array de usuários
  usuarios.push(usuario);

  // Salvar o array de usuários no localStorage
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

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









