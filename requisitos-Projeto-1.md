📝 Atividade — Sistema de Cadastro e Análise de Alunos
Enunciado
Crie uma aplicação utilizando apenas JavaScript para desenvolver um pequeno sistema de cadastro e análise de alunos.

O programa deverá permitir que o usuário cadastre alunos, informe suas notas e, ao final, apresente informações sobre o desempenho da turma.

O sistema deverá permitir:
Cadastrar alunos

Nome do aluno.

Idade.

Nota 1.

Nota 2.

Nota 3.

Calcular a média

A média deverá ser calculada utilizando as três notas:

média = (nota1 + nota2 + nota3) / 3

Definir a situação do aluno

Média maior ou igual a 7 → Aprovado.

Média entre 5 e 6.9 → Recuperação.

Média abaixo de 5 → Reprovado.

Exibir os dados dos alunos cadastrados

Nome.

Idade.

Notas.

Média.

Situação.

Apresentar informações gerais da turma

Quantidade total de alunos.

Quantidade de aprovados.

Quantidade de alunos em recuperação.

Quantidade de reprovados.

Média geral da turma.

Maior média.

Menor média.

Permitir pesquisar um aluno pelo nome

Caso o aluno exista, mostrar todas as suas informações.

Caso não exista, informar que o aluno não foi encontrado.

Criar um menu de opções

O usuário deverá poder escolher entre:

===== SISTEMA DE ALUNOS =====

1 - Cadastrar aluno
2 - Listar alunos
3 - Pesquisar aluno
4 - Ver estatísticas da turma
5 - Sair

O programa deverá continuar funcionando até que o usuário escolha a opção 5 - Sair.

Regras
O projeto deverá ser desenvolvido somente em JavaScript.

Não é necessário utilizar HTML ou CSS.

Utilize prompt() para receber informações do usuário.

Utilize alert() ou console.log() para apresentar os resultados.

Os alunos deverão ser armazenados em um array.

Cada aluno deverá ser representado utilizando um objeto.

Utilize funções para organizar o código.

Utilize estruturas condicionais (if, else if, else).

Utilize estruturas de repetição (while, for, etc.).

Faça validações para impedir o cadastro de notas menores que 0 ou maiores que 10.

O programa não deverá encerrar após uma única operação.

Exemplo de cadastro
O usuário escolhe:

1 - Cadastrar aluno

E informa:

Nome: João
Idade: 17
Nota 1: 8
Nota 2: 7
Nota 3: 9

O sistema deverá calcular:

Média: 8.0
Situação: Aprovado

Depois deverá voltar ao menu principal.

Desafio extra ⭐
Depois de terminar a atividade principal, implemente também:

Remoção de um aluno pelo nome.

Alteração das notas de um aluno.

Exibição dos alunos ordenados da maior para a menor média.

Impedir que dois alunos tenham exatamente o mesmo nome.