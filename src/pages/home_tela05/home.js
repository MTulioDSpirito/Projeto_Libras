window.onload = function() {
  var usuario = JSON.parse(localStorage.getItem('usuario'));
  if(usuario) {
    document.getElementById('user-info').textContent = usuario.nome;
  }
}