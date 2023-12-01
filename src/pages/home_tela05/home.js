
document.getElementById('logoutBtn').addEventListener('click', function() {
  alert("Logout realizado com sucesso!");
  window.location.href = "../login_tela3/login.html";
});



window.onload = function() {
  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
  // Aqui você pode especificar o índice do usuário que deseja buscar
  var indiceUsuario = 0;

  if (usuarios.length > indiceUsuario) {
    var usuario = usuarios[indiceUsuario];
    document.getElementById('user-info').textContent = usuario.nome;
  }
}
