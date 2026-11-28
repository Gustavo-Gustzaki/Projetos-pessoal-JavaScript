
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("form-login").addEventListener("submit", function(event) {

        event.preventDefault();

        let usuario = document.getElementById("usuario").value.trim();
        let senha = document.getElementById("senha").value;

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        let usuarioEncontrado = usuarios.find(function(conta) {
            return conta.usuario.toLowerCase() === usuario.toLowerCase() && conta.senha === senha;
        });

        if (usuarioEncontrado) {

            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

            alert("Login realizado com sucesso!");

            window.location.href = "index.html";

        } else {

            alert("Usuário ou senha incorretos!");

        }

    });

    document.getElementById("butao-cadastro").addEventListener("click", function() {

        window.location.href = "Cadastro.html";

    });

    document.getElementById("entrar-gov").addEventListener("click", function() {

        window.location.href = "https://www.gov.br/pt-br";

    });

});
