// Função para verificar o LocalStorage e criar a lista para a chave "usuario"
function criarListaUsuarioLocalStorage() {
    // Verifique se há dados no localStorage
    if (localStorage.length > 0) {
      // Recupere o valor associado à chave "usuario" no localStorage
      const usuario = localStorage.getItem('usuario');

      // Elemento ul onde a lista será exibida
      const listaLocalStorage = document.getElementById('listaLocalStorage');

      // Se a chave "usuario" existir, crie um elemento de lista para ela
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

  // Chame a função para criar a lista quando a página carregar
  window.onload = criarListaUsuarioLocalStorage;