function prencherEmail () {
    var usuario = JSON.parse (localStorage.getItem("usuario"));


    if (usuario) {
        document.getElementById ("emailInput").value = usuario.email;
    }

    if (usuario) {
        document.getElementById ("user-info").textContent = usuario.nome;
    }

    if (usuario) {
        document.getElementById ("passwordInput").value = usuario.senha;
    }

}

window.onload = prencherEmail; 








