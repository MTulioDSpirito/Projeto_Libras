
        // Função para verificar o LocalStorage e criar a lista
        function criarListaLocalStorage() {
          // Verifique se há dados no localStorage
          if (localStorage.length > 0) {
            // Recupere os dados do localStorage
            const dadosLocalStorage = Object.entries(localStorage);
    
            // Elemento ul onde a lista será exibida
            const listaLocalStorage = document.getElementById('listaLocalStorage');
    
            // Itere sobre os dados e crie elementos li para cada um
            dadosLocalStorage.forEach(([chave, valor]) => {
              const listItem = document.createElement('li');
              listItem.textContent = `${chave}: ${valor}`;
              listaLocalStorage.appendChild(listItem);
            });
          } else {
            console.log('Nenhum dado encontrado no localStorage.');
          }
        }
    
        // Chame a função para criar a lista quando a página carregar
        window.onload = criarListaLocalStorage;
