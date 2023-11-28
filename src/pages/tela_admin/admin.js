
function criarListaUsuarioLocalStorage() {
    // Verifique se há dados no localStorage
    if (localStorage.length > 0) {

      const usuario = localStorage.getItem('usuario');


      const listaLocalStorage = document.getElementById('listaLocalStorage');


      if (usuario !== null) {
        const listItem = document.createElement('li');
        listItem.textContent = `usuario: ${usuario}`;
        listaLocalStorage.appendChild(listItem);
      } else {
        console.log('Chave "usuario" não encontrada no localStorage.');
      }
    } else {
      console.log('Nenhum dado encontrado no localStorage.');
    }
  }

  window.onload = criarListaUsuarioLocalStorage;