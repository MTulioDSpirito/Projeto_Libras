function criarListaNomeEmailUsuarioLocalStorage() {
    if (localStorage.length > 0) {
        const usuariosString = localStorage.getItem('usuarios');
        const usuariosArray = JSON.parse(usuariosString);
        
        if (usuariosArray && usuariosArray.length > 0) {
            const listaLocalStorage = document.getElementById('listaLocalStorage');
            
            for (let i = 0; i < usuariosArray.length; i++) {
                const usuario = usuariosArray[i];
                
                if (usuario && usuario.nome && usuario.email) {
                    // Criar um div para cada usuário
                    const userDiv = document.createElement('div');
                    userDiv.style.display = 'flex';
                    userDiv.style.alignItems = 'center';
                    listaLocalStorage.appendChild(userDiv);
  
                    // Criar um botão de apagar para cada usuário
                    const eraseButton = document.createElement('button');
                    eraseButton.textContent = 'Apagar';
                    eraseButton.addEventListener('click', function() {
                        // Remover o usuário do array
                        usuariosArray.splice(i, 1);
                        
                        // Salvar o array atualizado no localStorage
                        localStorage.setItem('usuarios', JSON.stringify(usuariosArray));
                        
                        // Remover o div do usuário da página
                        listaLocalStorage.removeChild(userDiv);
                    });
                    userDiv.appendChild(eraseButton);
  
                    const listItemNome = document.createElement('li');
                    listItemNome.textContent = `Nome: ${usuario.nome}`;
                    userDiv.appendChild(listItemNome);
                    
                    const listItemEmail = document.createElement('li');
                    listItemEmail.textContent = `Email: ${usuario.email}`;
                    userDiv.appendChild(listItemEmail);
    
                    // Adicionar uma quebra de linha após cada usuário
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
  