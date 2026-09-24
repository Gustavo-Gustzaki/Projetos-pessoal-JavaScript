import console from 'console';
import Readline from 'readline/promises';

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//----------------------------------------------------------------------

async function Parar() {

    await rl.question("Precione [ENTER] para continuar")
    
}

//----------------------------------------------------------------------

    let nomesAlunos = [];
    let idadesAlunos = [];
    let seriesAlunos = [];
    let generosAlunos = [];

async function CadastroAlunos() {

    console.clear();
    console.log("====================");
    console.log(" CADASTRO DE ALUNOS");
    console.log("====================");

    let desejaCadastrarAluno = await rl.question("Deseja cadastrar algum aluno? ");
    while (desejaCadastrarAluno !== "sim" && desejaCadastrarAluno !== "não" && desejaCadastrarAluno !== "s" && desejaCadastrarAluno !== "n"){

    console.log("[ERRO] digite novamente!");
    desejaCadastrarAluno = await rl.question("Deseja cadastrar algum aluno? ");
    
    }
    if (desejaCadastrarAluno === "sim" || desejaCadastrarAluno === "s"){

        let nomeAluno = await rl.question("Qual é o nome do Aluno? ");
        while (nomeAluno === ""){

            console.log("[ERRO] Digite novamente!");
            nomeAluno = await rl.question("Qual é o nome do Aluno? ");
        }
        let idadeAluno = await rl.question(`Qual a idade do ${nomeAluno}? `);
        while (idadeAluno === "" || Number(idadeAluno) <= 0){

            console.log("[ERRO] Digite novamente!");
            idadeAluno = await rl.question(`Qual a idade do ${nomeAluno}? `);

        }

        let serieAluno = await rl.question(`Qual é a serie do ${nomeAluno}?(apenas número) `);
        while (serieAluno === "" || Number(serieAluno) <= 0){

            console.log("[ERRO] Digite novamente!");
            serieAluno = await rl.question(`Qual é a serie do ${nomeAluno}?(apenas número) `);

        }

        let generoAluno = await rl.question(`Qual é o genero do ${nomeAluno}?(Masculino/Feminino) `);
        while (generoAluno !== "masculino" && generoAluno !== "Masculino" && generoAluno !== "Feminino" && generoAluno !== "feminino"){

            console.log("[ERRO] Digite novamente!");
            generoAluno = await rl.question(`Qual é o genero do ${nomeAluno}?(Masculino/Feminino) `)
        }

        nomesAlunos.push (nomeAluno)
        idadesAlunos.push (Number(idadeAluno))
        seriesAlunos.push (Number(serieAluno))
        generosAlunos.push (generoAluno)
    } 
    else{
        return;
    }
}
//----------------------------------------------------------------------
async function Executar () {

    let escolha = "";

    do{
    
        console.clear();
    console.log("===========================")
    console.log(" 1- Cadastrar Aluno")
    console.log(" 2-Lista Alunos")
    console.log(" 3-Pesquisar Aluno")
    console.log(" 4-ver estatística da turma")
    console.log(" 5-Notas Alunos")
    console.log(" 6-Sair")
    console.log("===========================")
    escolha = await rl.question("Oque deseja fazer agora? R: ")

    if (escolha === "1"){
       await CadastroAlunos();
    }
    
    } while (escolha !== "6");
    rl.close();
}
Executar();