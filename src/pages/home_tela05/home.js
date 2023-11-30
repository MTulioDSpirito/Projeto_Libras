window.onload = function() {
  var usuario = JSON.parse(localStorage.getItem('usuario'));
  if(usuario) {
    document.getElementById('user-info').textContent = usuario.nome;
  }
}

document.getElementById('logoutBtn').addEventListener('click', function() {
  alert("Logout realizado com sucesso!");
  window.location.href = "../login_tela3/login.html";
});