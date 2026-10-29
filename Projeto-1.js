import console, { log } from 'console';
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
    let resultadoNotasFinal = [];
    let exameFinalNota = [];
    let loginUsuário = [];
    let loginSenha = [];
    let usuarioAdminProfessorAluno = [];
    usuarioAdminProfessorAluno[0] = "Admin";
    loginUsuário[0] = "Gustavo-Gustzaki";
    loginSenha[0] = "13579MestreAdmin";

async function CadastroAlunos() {

    console.clear();
    console.log("====================");
    console.log(" CADASTRO DE ALUNOS");
    console.log("====================");

    let desejaCadastrarAluno = await rl.question("Deseja cadastrar algum aluno? ");
    while (desejaCadastrarAluno !== "sim" && desejaCadastrarAluno !== "não" && desejaCadastrarAluno !== "s" && desejaCadastrarAluno !== "n"){

    console.clear();
    console.log("[ERRO] digite novamente!");
    desejaCadastrarAluno = await rl.question("Deseja cadastrar algum aluno? ");
    
    }
    if (desejaCadastrarAluno === "sim" || desejaCadastrarAluno === "s"){

        let nomeAluno = await rl.question("Qual é o nome do  Aluno? ");
        while (nomeAluno === ""){

            console.clear();
            console.log("[ERRO] Digite novamente!");
            nomeAluno = await rl.question("Qual é o nome do Aluno? ");
        }
        let idadeAluno = await rl.question(`Qual a idade do (a) ${nomeAluno}? `);
        while (idadeAluno === "" || Number(idadeAluno) <= 0){

            console.clear();
            console.log("[ERRO] Digite novamente!");
            idadeAluno = await rl.question(`Qual a idade do (a) ${nomeAluno}? `);

        }

        let serieAluno = await rl.question(`Qual é a serie do (a) ${nomeAluno}?(apenas número) `);
        while (serieAluno === "" || Number(serieAluno) <= 0){

            console.clear();
            console.log("[ERRO] Digite novamente!");
            serieAluno = await rl.question(`Qual é a serie do (a) ${nomeAluno}?(apenas número) `);

        }

        let generoAluno = await rl.question(`Qual é o genero do (a) ${nomeAluno}?(Masculino/Feminino) `);
        while (generoAluno !== "masculino" && generoAluno !== "Masculino" && generoAluno !== "Feminino" && generoAluno !== "feminino"){

            console.clear();
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

    const nomesAlunosCerto = nomesAlunos.map(nome => nome[0].toUpperCase() + nome.slice(1));

    let qualAlunopesquisar = await rl.question("Qual aluno Você quer pesquisar? ");
    while (qualAlunopesquisar === "" ){

        console.clear();
        console.log("[ERRO] Digite novamente!");
        qualAlunopesquisar = await rl.question("Qual aluno Você quer pesquisar? ");
    }

        let alunoEncontrado = false

    for (let i = 0; i < nomesAlunos.length; i++){
        
        if (qualAlunopesquisar.toLocaleLowerCase() === nomesAlunos[i].toLocaleLowerCase()){
            console.log("Aluno encontrado!")
            console.log("------------------------");
            console.log(`${i+1}.`);
            console.log(`Nome: ${nomesAlunosCerto[i]}`);
            console.log(`Idade: ${idadesAlunos[i]} anos`);
            console.log(`Série: ${seriesAlunos[i]} ano`);
            console.log(`Genero: ${generosAlunos[i]}`);
            alunoEncontrado = true;

            break;

        }
    }
    if (!alunoEncontrado){
            console.log("Aluno não encontrado!")
        }
        await Parar();
        return;
}
//----------------------------------------------------------------------
async function deletarAluno() {
    
    console.clear();
    console.log("================");
    console.log(" DELETAR ALUNOS");
    console.log("================");
    let escolhadeletar = await rl.question("Deseja deletar um Aluno?");
    while(escolhadeletar !== "Sim" && escolhadeletar !== "sim" && escolhadeletar !== "Não" && escolhadeletar !== "Nao" && escolhadeletar !== "não" && escolhadeletar !== "nao"){
        
        console.clear();
        console.log("[ERRO] Digite novamente!");
        escolhadeletar = await rl.question("Deseja deletar um Aluno?");
    }
    if(escolhadeletar.toLocaleLowerCase() === "sim"){

        console.clear();
        let qualAlunopesquisar = await rl.question("Qual Aluno Você quer pesquisar? R: ")
        while(qualAlunopesquisar === ""){

            console.clear();
            console.log("[ERRO] Digite novamente!");
            qualAlunopesquisar = await rl.question("Qual Aluno Você quer pesquisar? R: ")
        }

        const nomesAlunosCerto = nomesAlunos.map(nome => nome[0].toUpperCase() + nome.slice(1));

        console.clear();

        for (let indice = 0; indice < nomesAlunos.length;indice++){

        if (qualAlunopesquisar.toLocaleLowerCase() === nomesAlunos[indice].toLocaleLowerCase()){

            console.clear();
            console.log("Aluno encontrado!")
            console.log("------------------------");
            console.log(`${indice+1}.`);
            console.log(`Nome: ${nomesAlunosCerto[indice]}`);
            console.log(`Idade: ${idadesAlunos[indice]} anos`);
            console.log(`Série: ${seriesAlunos[indice]} ano`);
            console.log(`Genero: ${generosAlunos[indice]}`);
        }
        console.clear();
        let temCertezaExcluir = await rl.question("Tem certeza que deseja excluir esse aluno (a)? R: ")
        while(temCertezaExcluir !== "Sim" && temCertezaExcluir !== "sim" && temCertezaExcluir !== "Não" && temCertezaExcluir !== "Nao" && temCertezaExcluir !== "não" && temCertezaExcluir !== "nao"){
            
            console.clear();
            console.log("[ERRO] Digite novamente!");
            temCertezaExcluir = await rl.question("Tem certeza que deseja excluir esse aluno (a)? R: ")
        }
        if(temCertezaExcluir.toLocaleLowerCase() === "sim"){

            nomesAlunos.splice(indice, 1);
            idadesAlunos.splice(indice, 1);
            seriesAlunos.splice(indice, 1);
            generosAlunos.splice(indice, 1);

            console.clear();
            console.log(`${nomesAlunosCerto[indice]} excluido com Sucesso!`)
        }
        else{
            return;
        }
    }
    await Parar();
    }
    return;
}
//----------------------------------------------------------------------
async function  estatísticaTurma() {

    
    console.clear();
    console.log("===================")
    console.log(" ESTATISTICA TURMA")
    console.log("===================")

    if (nomesAlunos.length === 0){
        console.log("Sem Alunos cadastrados ou  Notas!")
        await Parar();
    }
    else{
        
        console.log(" 1- Turma")
        console.log(" 2- Meninos")
        console.log(" 3- Meninas")
        console.log(" 4- Voltar")
        console.log("==============")
        let escolhaEstatistica = Number(await rl.question("Qual estatistica deseja ver? R: "))
        while(escolhaEstatistica !== 1 && escolhaEstatistica !== 2 && escolhaEstatistica !== 3 && escolhaEstatistica !== 4){

            console.log("[ERRO] Digite novamente!");
            escolhaEstatistica = Number(await rl.question("Qual estatistica deseja ver? R: "))
        }
        if(escolhaEstatistica === 1){
    
            console.clear();
            let estatistica = 0
            let notaEstatisticaTurma = 0

            for (let indice = 0; indice < nomesAlunos.length; indice++){

                notaEstatisticaTurma = resultadoNotasFinal[indice] + notaEstatisticaTurma
            }

            estatistica = notaEstatisticaTurma / nomesAlunos.length
            console.log("=======================")
            console.log(` Media da turma: ${estatistica.toFixed(2)}`)
            console.log("=======================")
            await Parar();
        }
        else if(escolhaEstatistica === 2){
        
            console.clear();
            let notasMasculino = 0
            let mediaMasculino = 0
            let quantidadeMasculino = 0

            for (let indice = 0; indice < nomesAlunos.length; indice++){

                if (generosAlunos[indice].toLocaleLowerCase() === "masculino"){

                    notasMasculino = resultadoNotasFinal[indice] + notasMasculino
                    quantidadeMasculino++
                    mediaMasculino = notasMasculino / quantidadeMasculino
                }
                else{
                console.log("sem notas cadastradas...");
                await Parar();
                return;
                }
            }
            if(notasMasculino > 0){
                console.log("=======================");
                console.log(`Media dos Garotos: ${mediaMasculino.toFixed(2)}`);
                await Parar();
            }
        }
        else if (escolhaEstatistica === 3){
            
            console.clear();
            let notasFeminino = 0
            let mediaFeminino = 0
            let quantidadeFeminino = 0

            for (let indice = 0; indice < nomesAlunos.length; indice++){

                if (generosAlunos[indice].toLocaleLowerCase() === "feminino"){

                    notasFeminino = resultadoNotasFinal[indice] + notasFeminino
                    quantidadeFeminino++
                    mediaFeminino = notasFeminino / quantidadeFeminino

                    }
                else{
                    console.log("sem notas cadastradas...");
                    await Parar();
                    return;
                }
            }
            if(notasFeminino > 0){
                console.log("=======================");
                console.log(`Media das garotas: ${mediaFeminino.toFixed(2)}`);
                await Parar();
            }
        }
        else{
            console.clear();
            console.log("Saindo...")
            await Parar();
        }
    }
    return;
}
//----------------------------------------------------------------------
async function notasAlunos( ) {

    console.clear();
    console.log("=================")
    console.log(" NOTAS DE ALUNOS ")
    console.log("=================")

    let qualAlunoNota = await rl.question("Qual aluno Você quer pesquisar? R: ");
    while (qualAlunoNota === "" ){

        console.clear();
        console.log("[ERRO] Digite novamente!");
        qualAlunoNota = await rl.question("Qual aluno Você quer pesquisar? R: ");
    }

    let indiceAlunoEncontrado = -1

    const nomesAlunosCerto = nomesAlunos.map(nome => nome[0].toUpperCase() + nome.slice(1));

    for (let indice = 0; indice < nomesAlunos.length;indice++){

        if (qualAlunoNota.toLocaleLowerCase() === nomesAlunos[indice].toLocaleLowerCase()){

            console.log("Aluno encontrado!")
            console.log("------------------------");
            console.log(`${indice+1}.`);
            console.log(`Nome: ${nomesAlunosCerto[indice]}`);
            console.log(`Idade: ${idadesAlunos[indice]} anos`);
            console.log(`Série: ${seriesAlunos[indice]} ano`);
            console.log(`Genero: ${generosAlunos[indice]}`);
            indiceAlunoEncontrado = indice
            break;
        }
    }
    await Parar();

    if(indiceAlunoEncontrado === -1){
        console.log("Aluno não encontrado!")
        await Parar();
        return;
    }
    
    console.clear();

    let notaUm = Number(await rl.question(`Qual é a primeira nota do (a) ${qualAlunoNota}? R: `));
    while (notaUm === "" || Number(notaUm) < 0){

        console.clear();
        console.log("[ERRO] Digite novamente!");
        notaUm = Number(await rl.question(`Qual é a primeira nota do (a) ${qualAlunoNota}? R: `));
    }

    console.clear();
    let fezRecuperação = await rl.question("Fez recuperação dessa nota? R: ")
    while (fezRecuperação !== "Sim" && fezRecuperação !== "sim" && fezRecuperação !== "Não" && fezRecuperação !== "Não" && fezRecuperação !== "não" && fezRecuperação !== "nao"){

        console.clear();
        console.log("[ERRO] Digite novamente!");
        fezRecuperação = await rl.question("Fez recuperação dessa nota? R: ")
    }

    if (fezRecuperação === "sim" || fezRecuperação === "Sim"){

        console.clear();

        notaUm = Number(await rl.question(`Qual é a nota de recuperação do (a) ${qualAlunoNota}? R: `));
        while (notaUm === "" || Number(notaUm) < 0){

        console.clear();
        console.log("[ERRO] Digite novamente!");
        notaUm = Number(await rl.question(`Qual é a nota de recuperação do (a) ${qualAlunoNota}? R: `));

        }
    }

    console.clear();

    let notaDois = Number(await rl.question(`Qual é a segunda nota do (a) ${qualAlunoNota}? R: `));
    while (notaDois === "" || Number(notaDois) < 0){

        console.clear();
        console.log("[ERRO] Digite novamente!");
        notaDois = Number(await rl.question(`Qual é a segunda nota do (a) ${qualAlunoNota}? R: `));
    }

    console.clear();
    fezRecuperação = await rl.question("Fez recuperação dessa nota? R: ")
        while (fezRecuperação !== "Sim" && fezRecuperação !== "sim" && fezRecuperação !== "Não" && fezRecuperação !== "Não" && fezRecuperação !== "não" && fezRecuperação !== "nao"){

        console.clear();
        console.log("[ERRO] Digite novamente!");
        fezRecuperação = await rl.question("Fez recuperação dessa nota? R: ")
    }

    if (fezRecuperação === "sim" || fezRecuperação === "Sim"){

        console.clear();

        notaDois = Number(await rl.question(`Qual é a nota de recuperação do (a) ${qualAlunoNota}? R: `));
        while (notaDois === "" || Number(notaDois) < 0){

        console.clear();
        console.log("[ERRO] Digite novamente!");
        notaDois = Number(await rl.question(`Qual é a nota de recuperação do (a) ${qualAlunoNota}? R: `));

        }
    }


    console.clear();

    let notaTres = Number(await rl.question(`Qual é a terceira nota do (a) ${qualAlunoNota}? R: `));
    while (notaTres === "" || Number(notaTres) < 0){

        console.clear();
        console.log("[ERRO] Digite novamente!");
        notaTres = Number(await rl.question(`Qual é a terceira nota do (a) ${qualAlunoNota}? R: `));
    }

    console.clear();
    fezRecuperação = await rl.question("Fez recuperação dessa nota? R: ")
    while (fezRecuperação !== "Sim" && fezRecuperação !== "sim" && fezRecuperação !== "Não" && fezRecuperação !== "Não" && fezRecuperação !== "não" && fezRecuperação !== "nao"){
    
    console.clear();
    console.log("[ERRO] Digite novamente!");
    fezRecuperação = await rl.question("Fez recuperação dessa nota? R: ")
    }

    if (fezRecuperação === "sim" || fezRecuperação === "Sim"){

        console.clear();

        notaTres = Number(await rl.question(`Qual é a nota de recuperação do (a) ${qualAlunoNota}? R: `));
        while (notaTres === "" || Number(notaTres) < 0){

        console.clear();
        console.log("[ERRO] Digite novamente!");
        notaTres = Number(await rl.question(`Qual é a nota de recuperação do (a) ${qualAlunoNota}? R: `));
        }

    }   
        console.clear();

        let resultadoNotaFinal = (notaUm + notaDois + notaTres) / 3;
        resultadoNotasFinal[indiceAlunoEncontrado] = resultadoNotaFinal;
    
        console.log(`Media final do (a) ${nomesAlunosCerto[indiceAlunoEncontrado]}: ${resultadoNotasFinal[indiceAlunoEncontrado].toFixed(2)}`);

        if ( 7 > resultadoNotasFinal[indiceAlunoEncontrado]){

            let fezRecuperaçãoNota = await rl.question(`${nomesAlunosCerto[indiceAlunoEncontrado]} fez Exame Final?(Sim/Não)`)
            while(fezRecuperaçãoNota !== "Sim" && fezRecuperaçãoNota !== "sim" && fezRecuperaçãoNota !== "Não" && fezRecuperaçãoNota !== "não" && fezRecuperaçãoNota !== "Nao" && fezRecuperaçãoNota !== "nao"){

                console.log("[ERRO] Digite novamente!");
                fezRecuperaçãoNota = await rl.question(`${nomesAlunosCerto[indiceAlunoEncontrado]} fez Exame Final?(Sim/Não)`);
            }

            if (fezRecuperaçãoNota === "Sim" || fezRecuperaçãoNota === "sim"){

                console.clear();

                let notaExameFinal = Number(await rl.question(`Qual é a nota do (da) ${nomesAlunosCerto[indiceAlunoEncontrado]}?`));
                while (notaExameFinal === "" || Number(notaExameFinal) < 0){

                    console.clear();
                    console.log("[ERRO] Digite novamente!");
                    notaExameFinal = await rl.question(`Qual é a nota do (da) ${nomesAlunosCerto[indiceAlunoEncontrado]}?`);
                }

                let exameFinal = (resultadoNotaFinal + notaExameFinal) / 2;

                exameFinalNota[indiceAlunoEncontrado] = exameFinal

                if(exameFinal >= 5){
                    console.clear();
                    console.log(`${nomesAlunosCerto[indiceAlunoEncontrado]} Aprovado!`);
                }
                else{
                    console.clear();
                    console.log(`${nomesAlunosCerto[indiceAlunoEncontrado]} Reprovado!`);
                }
            }
            else{
                console.clear();
                console.log(`${nomesAlunosCerto[indiceAlunoEncontrado]} Reprovado por NÃO fazer a Prova!`);
            }
        }

        await Parar();
}
//----------------------------------------------------------------------

async function listaAlunos () {

    console.clear();
    console.log("=================");
    console.log(" LISTA DE ALUNOS");
    console.log("=================");
    
    const nomesAlunosCerto = nomesAlunos.map(nome => nome[0].toUpperCase() + nome.slice(1));

    if (nomesAlunos.length > 0){
    nomesAlunosCerto.forEach ((Alunos, index) => {

        console.log("------------------------");
        console.log(`${index+1}.`);
        console.log(`Nome: ${Alunos}`);
        console.log(`Idade: ${idadesAlunos[index]} anos`);
        console.log(`Série: ${seriesAlunos[index]} ano`);
        console.log(`Genero: ${generosAlunos[index]}`);

        if (resultadoNotasFinal[index] !== undefined){

        console.log(`Media Final: ${resultadoNotasFinal[index].toFixed(2)}`)

        if (resultadoNotasFinal[index] >= 7){

            console.log(`${Alunos} Aprovado!`)
        }
        else{
            console.log(`${Alunos} Reprovado!`)

            if (exameFinalNota[index] >= 5){
                console.log(`${Alunos} Aprovado Por Exame Final!`)
                console.log(`Nota do Exame Final: ${exameFinalNota[index].toFixed(2)}`)
            }
        }

        }
        else{
            console.log("Sem notas cadastradas")
        }
    })
    await Parar();
    }
    else{
        console.log("Sem cadastros feitos...");
        await Parar ();
    }
    console.clear();
    return;
}
//----------------------------------------------------------------------
async function login () {
    
    let loginOqueFazer = "";
    console.clear();
    do{
        console.log("===================");
        console.log(" LOGIN DE USUÁRIO");
        console.log("===================");
        console.log(" 1-Entrar")
        console.log(" 2-Cadastrar")
        console.log(" 3-Sair")
        console.log("===================")
        loginOqueFazer = await rl.question("Oque deseja fazer? R: ")
        while(loginOqueFazer !== "1" && loginOqueFazer !== "2" && loginOqueFazer !== "3"){

            console.clear();
            console.log("[ERRO] Digite novamente!");
            loginOqueFazer = await rl.question("Oque deseja fazer? R: ")
        }
        
        if(loginOqueFazer === "2"){
            console.clear();
            console.log("=====================")
            console.log(" CADASTRO DE USUÁRIO")
            console.log("=====================")
            let nomeLoginUsuario = await rl.question("Qual é o nome do usuário? R: ");
            while (nomeLoginUsuario === "") {

                console.clear();
                console.log("[ERRO] Digite novamente!");
                nomeLoginUsuario = await rl.question("Qual é o nome do usuário? R: ");
            }

            let senhaLoginUsuario = await rl.question("Qual é a senha do usuário? R: ");
            while (senhaLoginUsuario === "") {

                console.clear();
                console.log("[ERRO] Digite novamente!");
                senhaLoginUsuario = await rl.question("Qual é a senha do usuário? R: ");
            }

            loginUsuário.push(nomeLoginUsuario);
            loginSenha.push(senhaLoginUsuario);
            usuarioAdminProfessorAluno.push("Aluno")

            console.clear();
            console.log("Usuário cadastrado com sucesso!");
            await Parar();
        }
        else if (loginOqueFazer === "1"){

            console.clear();

            console.log("==================")
            console.log(" LOGIN DE USUÁRIO")
            console.log("==================")
            let nomeLoginUsuario = await rl.question("Qual é o nome do usuário? R: ");
            while (nomeLoginUsuario === "") {

                console.clear();
                console.log("[ERRO] Digite novamente!");
                nomeLoginUsuario = await rl.question("Qual é o nome do usuário? R: ");
            }

            let senhaLoginUsuario = await rl.question("Qual é a senha do usuário? R: ");
            while (senhaLoginUsuario === "") {

                console.clear();
                console.log("[ERRO] Digite novamente!");
                senhaLoginUsuario = await rl.question("Qual é a senha do usuário? R: ");
            }

            let usuarioEncontrado = false;

            for (let i = 0; i < loginUsuário.length; i++) {
                if (nomeLoginUsuario === loginUsuário[i] && senhaLoginUsuario === loginSenha[i]) {
                    usuarioEncontrado = true;
                    break;
                }
            }

            if (usuarioEncontrado) {

                console.clear();
                console.log("Login realizado com sucesso!");
                await Parar();
                
                console.clear;
                for(let indice = 0; indice < usuarioAdminProfessorAluno.length; indice++){
                    if(usuarioAdminProfessorAluno[indice].toLocaleLowerCase().includes("admin") && nomeLoginUsuario === loginUsuário[indice]){
                        await ExecutarAdmin();
                        console.clear();
                    }
                    else if(usuarioAdminProfessorAluno[indice].toLocaleLowerCase().includes("professor") && nomeLoginUsuario === loginUsuário[indice]){
                    await ExecutarProfessor();
                    console.clear();
                    }
                    else if(usuarioAdminProfessorAluno[indice].toLocaleLowerCase().includes("aluno") && nomeLoginUsuario === loginUsuário[indice]){
                    await ExecutarAluno();
                    console.clear();
                    }
                    else{
                    console.log("Não foi possivel entrar....")
                    await Parar();
                    console.clear();
                    return;
                    }
                }
            }else {
                console.clear();
                console.log("Usuário ou senha incorretos!");
                await Parar();
            }
        }
    }while(loginOqueFazer !== "3");

    console.log("Saindo do sistema...")
    await Parar();
    rl.close();
}
//----------------------------------------------------------------------
//----------------------------------------------------------------------
async function criarContas() {

    console.clear()

    do{

    
    console.log("==============");
    console.log(" CRIAR CONTAS");
    console.log("==============");
    console.log(" 1-Admin");
    console.log(" 2-Professor");
    console.log(" 3-Aluno");
    console.log(" 4-Voltar");
    let criarContasOqueFazer = await rl.question("Oque deseja fazer agora? R: ");
    while(criarContasOqueFazer === "" && criarContasOqueFazer !== "1" && criarContasOqueFazer !== "2" && criarContasOqueFazer !== "3" && criarContasOqueFazer !== "4"){

        console.log("[ERRO] Digite novamente!");
        criarContasOqueFazer = await rl.question("Oque deseja fazer agora? R: ");
    }

    if(criarContasOqueFazer === "1"){

        console.clear();
        console.log("===================");
        console.log(" CRIAR CONTA ADMIN");
        console.log("===================");
        console.log(" 1- Criar conta");
        console.log(" 2- Voltar");
        let escolhaCriarConta = await rl.question("Oque deseja fazer?")
        if(escolhaCriarConta === "1"){
            let nomeAdmin = await rl.question("Qual é o nome do Admin? R: ");
            while(nomeAdmin === ""){

                console.log("[ERRO] Digite novamente!");
                nomeAdmin = await rl.question("Qual é o nome do Admin? R: ");
        }
            let senhaAdmin = await rl.question("Qual é a senha do Admin? R: ");
            while(nomeAdmin === ""){

                console.log("[ERRO] Digite novamente!");
                senhaAdmin = await rl.question("Qual é a senha do Admin? R: ");
            } 
            loginUsuário.push(nomeAdmin);
            loginSenha.push(senhaAdmin);
            usuarioAdminProfessorAluno.push("Admin");

            console.log("Admin cadastrado com sucesso!");
            await Parar();
            return;
        }
        else{
            return;
        }
    }
    else if (criarContasOqueFazer === "2"){

        console.clear();
        console.log("=======================");
        console.log(" CRIAR CONTA PROFESSOR");
        console.log("=======================");
        console.log(" 1- Criar conta");
        console.log(" 2- Voltar");
        let escolhaCriarConta = await rl.question("Oque deseja fazer?")
        if(escolhaCriarConta === "1"){
            let nomeProfessor = await rl.question("Qual é o nome do Professor (a)? R: ");
            while(nomeProfessor === ""){

                console.log("[ERRO] Digite novamente!");
                nomeProfessor = await rl.question("Qual é o nome do Professor (a)? R: ");
            }
            let senhaProfessor = await rl.question("Qual é a senha do Professor (a)? R: ");
            while(senhaProfessor === ""){

                console.log("[ERRO] Digite novamente!");
                senhaProfessor = await rl.question("Qual é a senha do Professor (a)? R: ");
            }
            loginUsuário.push(nomeProfessor);
            loginSenha.push(senhaProfessor);
            usuarioAdminProfessorAluno.push("Professor");

            console.log("Professor (a) cadastrado com sucesso!");
            await Parar();
            return;
        }
        else{
            return;
        }
    }
    else if(criarContasOqueFazer === "3"){

        console.clear();
        console.log("===================");
        console.log(" CRIAR CONTA ALUNO");
        console.log("===================");
        console.log(" 1- Criar conta");
        console.log(" 2- Voltar");
        let escolhaCriarConta = await rl.question("Oque deseja fazer?")
        if(escolhaCriarConta === "1"){
            let nomeAluno = await rl.question("Qual é o nome do Aluno (a)? R: ");
            while(nomeAluno === ""){

                console.log("[ERRO] Digite novamente!");
                nomeAluno = await rl.question("Qual é o nome do Aluno (a)? R: ");
            }
            let senhaAluno =  await rl.question("Qual é a senha do aluno (a)? R: ");
            while(senhaAluno === ""){

                console.log("[ERRO] Digite novamente!");
                senhaAluno = await rl.question("Qual é a senha do aluno (a)? R: ");
            }
            loginUsuário.push(nomeAluno);
            loginSenha.push(senhaAluno);
            usuarioAdminProfessorAluno.push("Aluno");

            console.log("Aluno (a) cadastrado com sucesso!");
            await Parar();
            return;
        }
        else{
            return;
        }

    }
    }while(criarContasOqueFazer !== "4"){
        return;
    }
}
//----------------------------------------------------------------------
async function ExecutarAluno () {

    let escolha = "";

    console.clear();

    do{
    
    console.clear();
    console.log("===========================")
    console.log(" 1-Ver notas")
    console.log(" 2-ver estatística da turma")
    console.log(" 3-Próximas Avaliações");
    console.log(" 4-Perfil")
    console.log(" 5-Voltar")
    console.log("===========================")
    escolha = await rl.question("Oque deseja fazer agora? R: ")

    } while (escolha !== "5");
    console.clear();
    console.log("Saindo do sistema...")
    await Parar();
    return login();
}
//----------------------------------------------------------------------
async function ExecutarProfessor () {

    let escolha = "";

    console.clear();

    do{
    
    console.clear();
    console.log("============================")
    console.log(" 1-Lista Alunos")
    console.log(" 2-Pesquisar Aluno")
    console.log(" 3-Lançar / Alterar notas")
    console.log(" 4-Registrar faltas")
    console.log(" 5-Alunos em Recuperação")
    console.log(" 6-ver estatística da turma")
    console.log(" 7-Voltar")
    console.log("============================")
    escolha = await rl.question("Oque deseja fazer agora? R: ")

    if (escolha === "1"){
       await listaAlunos();
       console.clear();
    }

    else if (escolha === "2"){
        await pesquisarAlunos();
        console.clear();
    }

    else if (escolha === "3"){
        await notasAlunos();
        console.clear();
    }
    else if (escolha === "6"){
        await estatísticaTurma();
        console.clear();
    }
    } while (escolha !== "7");
    console.clear();
    console.log("Saindo do sistema...")
    await Parar();
    return login();
}
//----------------------------------------------------------------------

async function ExecutarAdmin () {

    let escolha = "";

    console.clear();

    do{
    console.log("=============================================");
    console.log("         ⚙️ PAINEL DO ADMINISTRADOR       ");
    console.log("=============================================");
    console.log(" 🟢 GESTÃO DE USUÁRIOS & CONTAS:");
    console.log("   1 - Criar Novas Contas (Prof/Admin/Aluno)");
    console.log("   2 - Listar e Bloquear/Ativar Usuários");
    console.log("   3 - Redefinir Senhas");
    console.log("");
    console.log(" 📚 GESTÃO ESCOLAR (TURMAS & DISCIPLINAS):");
    console.log("   4 - Criar Nova Turma ou Disciplina");
    console.log("   5 - Matricular Aluno em uma Turma");
    console.log("   6 - Vincular Professor a uma Turma");
    console.log("");
    console.log(" 🔍 CONTROLE DE DADOS (ALUNOS):");
    console.log("   7 - Buscar / Editar Dados de Aluno");
    console.log("   8 - Excluir Registro (Aluno/Professor)");
    console.log("   9 - Backup / Ver Estatísticas Gerais");
    console.log("");
    console.log(" 🚪 SISTEMA:");
    console.log("   10 - Voltar ao Menu Principal");
    console.log("=============================================");
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
    else if (escolha === "5"){
        await estatísticaTurma();
        console.clear();
    }
    else if (escolha === "6"){
        await deletarAluno();
        console.clear();
    }
    else if (escolha === "7"){
        await criarContas();
        console.clear();
    }
    }while (escolha !== "8");
    console.clear();
    console.log("Saindo do sistema...")
    await Parar();
    return login();
}
login();