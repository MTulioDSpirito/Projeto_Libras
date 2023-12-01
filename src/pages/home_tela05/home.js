
document.getElementById('logoutBtn').addEventListener('click', function() {
  alert("Logout realizado com sucesso!");
  window.location.href = "../login_tela3/login.html";
});



window.onload = function() {
  var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  
  if (usuarioLogado) {
    document.getElementById('user-info').textContent = usuarioLogado.nome;
  }
}
