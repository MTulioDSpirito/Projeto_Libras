function criarListaNomeEmailUsuarioLocalStorage() {
  if (localStorage.length > 0) {
      const usuariosString = localStorage.getItem('usuarios');
      const usuariosArray = JSON.parse(usuariosString);
      
      if (usuariosArray && usuariosArray.length > 0) {
          const listaLocalStorage = document.getElementById('listaLocalStorage');
          
          for (let i = 0; i < usuariosArray.length; i++) {
              const usuario = usuariosArray[i];
              
              if (usuario && usuario.nome && usuario.email) {
                  const listItemNome = document.createElement('li');
                  listItemNome.textContent = `Nome: ${usuario.nome}`;
                  listaLocalStorage.appendChild(listItemNome);
                  
                  const listItemEmail = document.createElement('li');
                  listItemEmail.textContent = `Email: ${usuario.email}`;
                  listaLocalStorage.appendChild(listItemEmail);

                  // Adicionar uma quebra de linha após cada par de nome e e-mail
                  const breakLine = document.createElement('br');
                  listaLocalStorage.appendChild(breakLine);
              }
          }
      } else {
          console.log('Chave "usuarios" não encontrada no localStorage ou nenhum usuário salvo.');
      }
  } else {
      console.log('Nenhum dado encontrado no localStorage.');
  }
}

window.onload = criarListaNomeEmailUsuarioLocalStorage;



document.getElementById('erase').addEventListener('click', function() {
    // Limpar todos os usuários do localStorage
    localStorage.removeItem('usuarios');
  
    // Limpar a lista de usuários na página
    document.getElementById('listaLocalStorage').innerHTML = '';
  });
  