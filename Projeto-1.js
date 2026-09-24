import console from 'console';
import Readline from 'readline/promises';

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function Parar() {

    await rl.question("Precione [ENTER] para continuar")
    
}

async function CadastroAlunos() {

    console.clear();
    console.log("====================");
    console.log(" CADASTRO DE ALUNOS");
    console.log("====================");

    let desejaCadastrarAluno = await rl.question("Deseja cadastrar algum aluno?");
    while (desejaCadastrarAluno !== "sim" && desejaCadastrarAluno !== "não" && desejaCadastrarAluno !== "s" && desejaCadastrarAluno !== "n"){

    console.log("[ERRO] digite novamente!");
    desejaCadastrarAluno = await rl.question("Deseja cadastrar algum aluno?");
    
    }
    if (desejaCadastrarAluno === "sim" || desejaCadastrarAluno === "s"){

        let nomeAluno = await rl.question("Qual é o nome do Aluno?")
        while (nomeAluno === ""){

            console.log("[ERRO] Digite novamente!");
            nomeAluno = await rl.question("Qual é o nome do Aluno?")
        }
    } else{
        return;
    }
}
async function Executar () {

    let escolha = "";
    let nomesAlunos = [];

    do{
    
        console.clear();
    console.log("===========================")
    console.log(" 1- Cadastrar Aluno")
    console.log(" 2-Lista Alunos")
    console.log(" 3-Pesquisar Aluno")
    console.log(" 4-ver estatística da turma")
    console.log(" 5-Sair")
    console.log("===========================")
    escolha = await rl.question("Oque deseja fazer agora?")

    if (escolha === "1"){
       await CadastroAlunos();
    }
    
    } while (escolha !== "5");
    rl.close();
}
Executar();