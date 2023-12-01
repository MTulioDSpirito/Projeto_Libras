window.onload = function() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
        document.getElementById('user-info').textContent = usuario.nome;
    }
}

function checkAnswer() {
    const userInput = document.getElementById('user-input').value.toLowerCase();

    // Verifique se o usuário já respondeu à pergunta anteriormente
    if (localStorage.getItem('10')) {
        alert('Você já acertou esta pergunta antes. Não serão atribuídos mais pontos.');
        return; // Saia da função para evitar atribuir mais pontos
    }

    let points = Number(localStorage.getItem('points')) || 0;

    // Adapte a lógica para pontuar com base na resposta do usuário em texto
    if (userInput === 'trator') {
        points += 3;

        // Marque a pergunta como acertada para evitar atribuir mais pontos
        localStorage.setItem('10', true);
    }

    localStorage.setItem('points', points);

    // Adicione aqui a lógica para avançar para a próxima atividade ou página
    // Por exemplo, redirecionar para a próxima página de atividade
    // window.location.href = 'próxima_pagina.html'; // Substitua 'próxima_pagina.html' pelo seu URL desejado
}
