document.addEventListener("DOMContentLoaded", function () {

    let formulario = document.getElementById("form-login");
    let botaoCadastro = document.getElementById("butao-cadastro");
    let botaoGov = document.getElementById("entrar-gov");

    if (!formulario) {
        alert("Erro: formulário de login não encontrado!");
        return;
    }

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        let usuario = document.getElementById("usuario").value.trim();
        let senha = document.getElementById("senha").value;

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        let usuarioEncontrado = usuarios.find(function (conta) {
            return conta.usuario.toLowerCase() === usuario.toLowerCase() && conta.senha === senha;
        });

        if (usuarioEncontrado) {

            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

            alert("Login realizado com sucesso!");

            window.location.href = "../tela-inicial/index.html";

        } else {

            alert("Usuário ou senha incorretos!");

        }

    });

    if (botaoCadastro) {
        botaoCadastro.addEventListener("click", function () {
            window.location.href = "../cadastro/Cadastro.html";
        });
    }

    if (botaoGov) {
        botaoGov.addEventListener("click", function () {
            window.location.href = "https://www.gov.br/pt-br";
        });
    }

});