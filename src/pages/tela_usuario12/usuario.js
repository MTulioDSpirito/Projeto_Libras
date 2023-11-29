// Função para preencher o campo de e-mail com o e-mail do usuário
function preencherDados() {
  // Recuperar o usuário do localStorage
  var usuario = JSON.parse(localStorage.getItem('usuario'));

  // Verificar se o usuário existe
  if (usuario) {
      // Preencher o campo de e-mail com o e-mail do usuário
      document.getElementById('user-info').value = usuario.nome;
      document.getElementById('emailInput').value = usuario.email;
      document.getElementById('passwordInput').value = usuario.senha;
    
  }
}
// Chamar a função preencherEmail quando a página for carregada
window.onload = preencherDados;

// codigo para o nome


document.getElementById('editButton').addEventListener('click', function() {
  // Limpar o campo
  document.getElementById('user-info').value = '';

  // tornar o campo editável
  document.getElementById('user-info').readOnly = false;

  // mostrar o botão salvar e esconder o botão editar
  document.getElementById('saveButton').style.display = 'flex';
  document.getElementById('editButton').style.display = 'none';
});

document.getElementById('saveButton').addEventListener('click', function() {
  // tornar o campo somente leitura
  document.getElementById('user-info').readOnly = true;

  // mostrar o botão editar e esconder o botão salvar
  document.getElementById('editButton').style.display = 'flex';
  document.getElementById('saveButton').style.display = 'none';

  var usuario = JSON.parse(localStorage.getItem('usuario'));
   if (usuario) {
     usuario.nome = document.getElementById('user-info').value;
     localStorage.setItem('usuario', JSON.stringify(usuario));
   }

  
});


// codigo para o email


document.getElementById('editButton2').addEventListener('click', function() {
  // Limpar o campo
  document.getElementById('emailInput').value = '';

  // tornar o campo editável
  document.getElementById('emailInput').readOnly = false;

  // mostrar o botão salvar e esconder o botão editar
  document.getElementById('saveButton2').style.display = 'flex';
  document.getElementById('editButton2').style.display = 'none';
});

document.getElementById('saveButton2').addEventListener('click', function() {
  // tornar o campo somente leitura
  document.getElementById('emailInput').readOnly = true;

  // mostrar o botão editar e esconder o botão salvar
  document.getElementById('editButton2').style.display = 'flex';
  document.getElementById('saveButton2').style.display = 'none';

  var usuario = JSON.parse(localStorage.getItem('usuario'));
   if (usuario) {
     usuario.email = document.getElementById('emailInput').value;
     localStorage.setItem('usuario', JSON.stringify(usuario));
   }
});

  // codigo para a senha

  document.getElementById('editButton3').addEventListener('click', function() {
    // Limpar o campo
    document.getElementById('passwordInput').value = '';
  
    // tornar o campo editável
    document.getElementById('passwordInput').readOnly = false;
  
    // mostrar o botão salvar e esconder o botão editar
    document.getElementById('saveButton3').style.display = 'flex';
    document.getElementById('editButton3').style.display = 'none';
  });
  
  document.getElementById('saveButton3').addEventListener('click', function() {
    // tornar o campo somente leitura
    document.getElementById('passwordInput').readOnly = true;
  
    // mostrar o botão editar e esconder o botão salvar
    document.getElementById('editButton3').style.display = 'flex';
    document.getElementById('saveButton3').style.display = 'none';

    var usuario = JSON.parse(localStorage.getItem('usuario'));
   if (usuario) {
     usuario.senha = document.getElementById('passwordInput').value;
     localStorage.setItem('usuario', JSON.stringify(usuario));
   }
  });


  function mostrarSenha() {
    var senha = document.getElementById("passwordInput");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
  }
 

