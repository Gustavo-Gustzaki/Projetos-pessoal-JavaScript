import console from 'console';
import Readline from 'readline/promises';
import { PassThrough } from 'stream';

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
    let notasUm = [];
    let notasDois = [];
    let notasTres = [];

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

        let nomeAluno = await rl.question("Qual é o nome do  Aluno? ");
        while (nomeAluno === ""){

            console.log("[ERRO] Digite novamente!");
            nomeAluno = await rl.question("Qual é o nome do Aluno? ");
        }
        let idadeAluno = await rl.question(`Qual a idade do (a) ${nomeAluno}? `);
        while (idadeAluno === "" || Number(idadeAluno) <= 0){

            console.log("[ERRO] Digite novamente!");
            idadeAluno = await rl.question(`Qual a idade do (a) ${nomeAluno}? `);

        }

        let serieAluno = await rl.question(`Qual é a serie do (a) ${nomeAluno}?(apenas número) `);
        while (serieAluno === "" || Number(serieAluno) <= 0){

            console.log("[ERRO] Digite novamente!");
            serieAluno = await rl.question(`Qual é a serie do (a) ${nomeAluno}?(apenas número) `);

        }

        let generoAluno = await rl.question(`Qual é o genero do (a) ${nomeAluno}?(Masculino/Feminino) `);
        while (generoAluno !== "masculino" && generoAluno !== "Masculino" && generoAluno !== "Feminino" && generoAluno !== "feminino"){

            console.log("[ERRO] Digite novamente!");
            generoAluno = await rl.question(`Qual é o genero do (a) ${nomeAluno}?(Masculino/Feminino) `)
        }

        nomesAlunos.push (nomeAluno);
        idadesAlunos.push (Number(idadeAluno));
        seriesAlunos.push (Number(serieAluno));
        generosAlunos.push (generoAluno);
    } 
    else{
        return;
    }
}
//----------------------------------------------------------------------
async function pesquisarAlunos () {

    console.clear();
    console.log("==================")
    console.log(" PESQUISAR ALUNOS")
    console.log("==================")

    let qualAlunopesquisar = await rl.question("Qual aluno Você quer pesquisar? ");
    while (qualAlunopesquisar === "" ){

        console.log("[ERRO] Digite novamente!");
        qualAlunopesquisar = await rl.question("Qual aluno Você quer pesquisar? ");
    }

        let alunoEncontrado = false

    for (let i = 0; i < nomesAlunos.length; i++){
        
        if (qualAlunopesquisar.toLocaleLowerCase() === nomesAlunos[i].toLocaleLowerCase()){
            console.log("Aluno encontrado!")
            console.log("------------------------");
            console.log(`${i+1}.`);
            console.log(`Nome: ${nomesAlunos[i]}`);
            console.log(`Idade: ${idadesAlunos[i]} anos`);
            console.log(`Série: ${seriesAlunos[i]} ano`);
            console.log(`Genero: ${generosAlunos[i]}`);
            alunoEncontrado = true;

            break;

        }
    }
    if (!alunoEncontrado){
            console.log("Não encontrado!")
        }
        await Parar();
        return;
}
//----------------------------------------------------------------------
async function notasAlunos( ) {

    console.log("=================")
    console.log(" NOTAS DE ALUNOS ")
    console.log("=================")

    let qualAlunoNota = await rl.question("Qual aluno Você quer pesquisar?");
    while (qualAlunoNota === "" ){

        console.log("[ERRO] Digite novamente!");
        qualAlunoNota = await rl.question("Qual aluno Você quer pesquisar?");
    }

    let alunoEncontradoNota = false

    for (let indice = 0; indice < nomesAlunos.length;indice++){

        if (qualAlunoNota.toLocaleLowerCase() === nomesAlunos[indice].toLocaleLowerCase()){
            
            console.log("Aluno encontrado!")
            console.log("------------------------");
            console.log(`${indice+1}.`);
            console.log(`Nome: ${nomesAlunos[indice]}`);
            console.log(`Idade: ${idadesAlunos[indice]} anos`);
            console.log(`Série: ${seriesAlunos[indice]} ano`);
            console.log(`Genero: ${generosAlunos[indice]}`);
            alunoEncontradoNota = true;
            break;
        }

    }
    if(!alunoEncontradoNota){
        console.log("Não encontrado!");
    }
    await Parar();
    
    let notaUm = await rl.question(`Qual é a primeira nota do (a) ${qualAlunoNota}? R: `);
    while (notaUm === "" || Number(notaUm) < 0){

        console.log("[ERRO] Digite novamente!");
        notaUm = await rl.question(`Qual é a primeira nota do (a) ${qualAlunoNota}? R: `);
    }

    notasUm.push (notaUm)

    let fezRecuperação = await rl.question("Fez recuperação dessa nota? R: ")
    while (fezRecuperação !== "Sim" && fezRecuperação !== "sim" && fezRecuperação !== "Não" && fezRecuperação !== "Não" && fezRecuperação !== "não" && fezRecuperação !== "nao"){

        console.log("[ERRO] Digite novamente!");
        fezRecuperação = await rl.question("Fez recuperação dessa nota? R: ")
    }

    if (fezRecuperação === "sim" || fezRecuperação === "Sim"){

        notaUm = await rl.question(`Qual é a nota de recuperação do (a) ${qualAlunoNota}? R: `);
        while (notaUm === "" || Number(notaUm) < 0){

        console.log("[ERRO] Digite novamente!");
        notaUm = await rl.question(`Qual é a nota de recuperação do (a) ${qualAlunoNota}? R: `);

        }

        notasUm.push (notaUm)
    }

    let notaDois = await rl.question(`Qual é a segunda nota do (a) ${qualAlunoNota}`)
    while (notaDois === "" || Number(notaDois) < 0){

        console.log("[ERRO] Digite novamente!");
        notaDois = await rl.question(`Qual é a segunda nota do (a) ${qualAlunoNota}`)
    }

    notasDois.push (notasDois)

    fezRecuperação = await rl.question("Fez recuperação dessa nota? R: ")
    while (fezRecuperação !== "Sim" && fezRecuperação !== "sim" && fezRecuperação !== "Não" && fezRecuperação !== "Não" && fezRecuperação !== "não" && fezRecuperação !== "nao"){

        console.log("[ERRO] Digite novamente!");
        fezRecuperação = await rl.question("Fez recuperação dessa nota? R: ")
    }
    
    if (fezRecuperação === "sim" || fezRecuperação === "Sim"){

        notaDois = await rl.question(`Qual é a nota de recuperação do (a) ${qualAlunoNota}? R: `);
        while (notaDois === "" || Number(notaDois) < 0){

        console.log("[ERRO] Digite novamente!");
        notaDois = await rl.question(`Qual é a nota de recuperação do (a) ${qualAlunoNota}? R: `);
        }
        notasDois.push (notasDois)
    }

    
}
//----------------------------------------------------------------------

async function listaAlunos () {

    console.clear();
    console.log("=================");
    console.log(" LISTA DE ALUNOS");
    console.log("=================");

    if (nomesAlunos.length > 0){
    nomesAlunos.forEach ((Alunos, index) => {

        console.log("------------------------");
        console.log(`${index+1}.`);
        console.log(`Nome: ${Alunos}`);
        console.log(`Idade: ${idadesAlunos[index]} anos`);
        console.log(`Série: ${seriesAlunos[index]} ano`);
        console.log(`Genero: ${generosAlunos[index]}`);
    })
    await Parar();
    }
    else{
        console.log("Sem cadastros feitos...");
        await Parar ();
    }
}
async function Executar () {

    let escolha = "";

    do{
    
        console.clear();
    console.log("===========================")
    console.log(" 1- Cadastrar Aluno")
    console.log(" 2-Lista Alunos")
    console.log(" 3-Pesquisar Aluno")
    console.log(" 4-Notas Alunos")
    console.log(" 5-ver estatística da turma")
    console.log(" 6-Sair")
    console.log("===========================")
    escolha = await rl.question("Oque deseja fazer agora? R: ")

    if (escolha === "1"){
       await CadastroAlunos();
       console.clear();
    }

    else if (escolha === "2"){
        await listaAlunos();
        console.clear();
    }

    else if (escolha === "3"){
        await pesquisarAlunos ();
        console.clear();
    }
    else if (escolha === "4"){
        await notasAlunos();
        console.clear();
    }
    
    } while (escolha !== "6");
    rl.close();
}
Executar();