// Função para atualizar os dados do usuário no localStorage
function atualizarDados(campo, valor) {
  // Recuperar o usuário logado do localStorage
  var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (usuarioLogado) {
    // Atualizar o campo do usuário
    usuarioLogado[campo] = valor;

    // Salvar o usuário logado atualizado no localStorage
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
  }
}

// Função para preencher os campos com os dados do usuário
function preencherDados() {
  // Recuperar o usuário logado do localStorage
  var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (usuarioLogado) {
    // Preencher os campos com os dados do usuário
    document.getElementById('user-info').value = usuarioLogado.nome;
    document.getElementById('emailInput').value = usuarioLogado.email;
    document.getElementById('passwordInput').value = usuarioLogado.senha;
  }
}

window.onload = function() {
  preencherDados();

  // Desativar os campos de entrada por padrão
  document.getElementById('user-info').disabled = true;
  document.getElementById('emailInput').disabled = true;
  document.getElementById('passwordInput').disabled = true;

  document.getElementById('editButton').addEventListener('click', function() {
    document.getElementById('editButton').style.display = "none";
    document.getElementById('saveButton').style.display = 'flex';

    // Habilitar o campo de entrada quando o botão de edição for clicado
    document.getElementById('user-info').disabled = false;
  });

  document.getElementById('saveButton').addEventListener('click', function() {
    document.getElementById('editButton').style.display = "flex";
    document.getElementById('saveButton').style.display = 'none';

    // Desativar o campo de entrada após salvar
    document.getElementById('user-info').disabled = true;

    // Atualizar o nome do usuário no localStorage
    var nome = document.getElementById('user-info').value;
    atualizarDados('nome', nome);
  });

  document.getElementById('editButton2').addEventListener('click', function() {
    document.getElementById('editButton2').style.display = "none";
    document.getElementById('saveButton2').style.display = 'flex';

    // Habilitar o campo de entrada quando o botão de edição for clicado
    document.getElementById('emailInput').disabled = false;
  });

  document.getElementById('saveButton2').addEventListener('click', function() {
    document.getElementById('editButton2').style.display = "flex";
    document.getElementById('saveButton2').style.display = 'none';

    // Desativar o campo de entrada após salvar
    document.getElementById('emailInput').disabled = true;

    // Atualizar o email do usuário no localStorage
    var email = document.getElementById('emailInput').value;
    atualizarDados('email', email);
  });

  document.getElementById('editButton3').addEventListener('click', function() {
    document.getElementById('editButton3').style.display = "none";
    document.getElementById('saveButton3').style.display = 'flex';

    // Habilitar o campo de entrada quando o botão de edição for clicado
    document.getElementById('passwordInput').disabled = false;
  });

  document.getElementById('saveButton3').addEventListener('click', function() {
    document.getElementById('editButton3').style.display = "flex";
    document.getElementById('saveButton3').style.display = 'none';

    // Desativar o campo de entrada após salvar
    document.getElementById('passwordInput').disabled = true;

    // Atualizar a senha do usuário no localStorage
    var senha = document.getElementById('passwordInput').value;
    atualizarDados('senha', senha);
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
