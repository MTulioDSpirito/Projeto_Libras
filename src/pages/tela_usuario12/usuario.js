// Função para atualizar os dados do usuário no localStorage
function atualizarDados(indiceUsuario, campo, valor) {
  // Recuperar os usuários do localStorage
  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  if (usuarios.length > indiceUsuario) {
    // Atualizar o campo do usuário
    usuarios[indiceUsuario][campo] = valor;

    // Salvar o array de usuários atualizado no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}

// Função para preencher os campos com os dados do usuário
function preencherDados() {
  // Recuperar os usuários do localStorage
  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Aqui você pode especificar o índice do usuário que deseja buscar
  var indiceUsuario = 0;

  if (usuarios.length > indiceUsuario) {
    var usuario = usuarios[indiceUsuario];

    // Preencher os campos com os dados do usuário
    document.getElementById('user-info').value = usuario.nome;
    document.getElementById('emailInput').value = usuario.email;
    document.getElementById('passwordInput').value = usuario.senha;
  }
}

window.onload = function() {
  preencherDados();

  document.getElementById('editButton').addEventListener('click', function() {
    document.getElementById('editButton').style.display = "none";
    document.getElementById('saveButton').style.display = 'flex';
  });

  document.getElementById('saveButton').addEventListener('click', function() {
    document.getElementById('editButton').style.display = "flex";
    document.getElementById('saveButton').style.display = 'none';

    // Atualizar o nome do usuário no localStorage
    var nome = document.getElementById('user-info').value;
    atualizarDados(0, 'nome', nome);
  });

  document.getElementById('editButton2').addEventListener('click', function() {
    document.getElementById('editButton2').style.display = "none";
    document.getElementById('saveButton2').style.display = 'flex';
  });

  document.getElementById('saveButton2').addEventListener('click', function() {
    document.getElementById('editButton2').style.display = "flex";
    document.getElementById('saveButton2').style.display = 'none';

    // Atualizar o email do usuário no localStorage
    var email = document.getElementById('emailInput').value;
    atualizarDados(0, 'email', email);
  });

  document.getElementById('editButton3').addEventListener('click', function() {
    document.getElementById('editButton3').style.display = "none";
    document.getElementById('saveButton3').style.display = 'flex';
  });

  document.getElementById('saveButton3').addEventListener('click', function() {
    document.getElementById('editButton3').style.display = "flex";
    document.getElementById('saveButton3').style.display = 'none';

    // Atualizar a senha do usuário no localStorage
    var senha = document.getElementById('passwordInput').value;
    atualizarDados(0, 'senha', senha);
  });
};


function mostrarSenha() {
  var senha = document.getElementById("passwordInput");
  if (senha.type === "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}