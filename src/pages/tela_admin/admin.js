   function criarListaNomeEmailUsuarioLocalStorage() {
        if (localStorage.length > 0) {
          const usuarioString = localStorage.getItem('usuario');
          const usuarioObjeto = JSON.parse(usuarioString);
          if (usuarioObjeto && usuarioObjeto.nome && usuarioObjeto.email) {
            const listaLocalStorage = document.getElementById('listaLocalStorage');
            const listItemNome = document.createElement('li');
            listItemNome.textContent = `nome: ${usuarioObjeto.nome}`;
            listaLocalStorage.appendChild(listItemNome);
            const listItemEmail = document.createElement('li');
            listItemEmail.textContent = `email: ${usuarioObjeto.email}`;
            listaLocalStorage.appendChild(listItemEmail);
          } else {
            console.log('Chave "usuario" e/ou subchaves "nome" e "email" não encontradas no localStorage.');
          }
        } else {
          console.log('Nenhum dado encontrado no localStorage.');
        }
      }
      window.onload = criarListaNomeEmailUsuarioLocalStorage;