document.addEventListener("DOMContentLoaded", function () {

    let formulario = document.getElementById("form-cadastro");
    let botaoGov = document.getElementById("entrar-gov");

    if (!formulario) {
        alert("Erro: formulário de cadastro não encontrado!");
        return;
    }

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        let nome = document.getElementById("nome").value.trim();
        let idade = document.getElementById("idade").value;
        let cpf = document.getElementById("cpf").value.trim();
        let cep = document.getElementById("cep").value.trim();
        let telefone = document.getElementById("telefone").value.trim();
        let usuario = document.getElementById("usuario").value.trim();
        let senha = document.getElementById("senha").value;
        let confirmarSenha = document.getElementById("confirmar-senha").value;

        if (senha !== confirmarSenha) {
            alert("As senhas não são iguais!");
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        let usuarioExistente = usuarios.find(function (conta) {
            return conta.usuario.toLowerCase() === usuario.toLowerCase();
        });

        if (usuarioExistente) {
            alert("Esse nome de usuário já está cadastrado!");
            return;
        }

        let novoUsuario = {
            nome: nome,
            idade: idade,
            cpf: cpf,
            cep: cep,
            telefone: telefone,
            usuario: usuario,
            senha: senha
        };

        usuarios.push(novoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");

        window.location.href = "../login/Login.html";

    });

    if (botaoGov) {
        botaoGov.addEventListener("click", function () {
            window.location.href = "https://www.gov.br/pt-br";
        });
    }

});