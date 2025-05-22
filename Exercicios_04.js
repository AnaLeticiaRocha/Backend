import entradaDados from 'readline-sync';
//Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente.
//let nome = entradaDados.question("Informe seu nome: ")
//console.log(`Olá, ${nome}!`)
/*let numero = entradaDados.questionInt("Digite o dia da semana: ")
switch (numero) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda-feira')
        break
    case 3:
        console.log('Terça-feira')
        break
    case 4:
        console.log('Quarta-feira')
        break
    case 5:
        console.log('Quinta-feira')
        break
    case 6:
        console.log('Sexta-feira')
        break
    case 7:
        console.log('Sábado')
        break
    default:
        console.log("Valor Inválido! \nInforme o valor no intervalo de 1 a 7")
        break
}

//Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome
//do mês.
let mes = entradaDados.questionInt('Digite o número do mes: ')
switch (mes) {
    case 1:
        console.log('Janeiro')
        break
    case 2:
        console.log('Fevereiro')
        break
    case 3:
        console.log('Março')
        break
    case 4:
        console.log('Abril')
        break
    case 5:
        console.log('Maio')
        break
    case 6:
        console.log('Junho')
        break
    case 7:
        console.log('Julho')
        break
    case 8:
        console.log('Agosto')
        break
    case 9:
        console.log('Setembro')
        break
    case 10:
        console.log('Outubro')
        break
    case 11:
        console.log('Novembro')
        break
    case 12:
        console.log('Dezembro')
        break
    default:
        console.log("Valor Inválido! \nInforme o valor no intervalo de 1 a 12")
}

//Implementar um programa que simule uma calculadora. O usuário deverá
//informar dois valores e a operação desejada.
//Com auxílio de um switch deve ser computado e mostrado o resultado da
//operação.
let n1 = entradaDados.questionInt('Digite o primeiro número: ')
let n2 = entradaDados.questionInt('Digite o segundo número: ')
let calculadora = entradaDados.questionInt('Informe a operação desejada:\n(1)Adição\n(2)Subtração\n(3)Multiplicação\n(4)Divisão\n ')
switch (calculadora) {
    case 1:
        console.log(`${n1} + ${n2} = ${n1 + n2}`)
        break
    case 2:
        console.log(`${n1} - ${n2} = ${n1 - n2}`)
        break
    case 3:
        console.log(`${n1} * ${n2} = ${n1 * n2}`)
        break
    case 4:
        console.log(`${n1} / ${n2} = ${n1 / n2}`)
        break
    default:
        console.log('Opção inválida!')
        break
}*/

/*Um funcionário irá receber um aumento de acordo com o seu
categoria de bonificação (A,B,C e D).
A tabela abaixo mostra o percentual de aumento de cada
categoria:
Faça um programa que leia a categoria de bonificação e o
salário atual de um funcionário, em seguida calcule e
imprima o seu novo salário. Use a instrução switch.*/
let salario = entradaDados.questionFloat('Informe seu salário: ');
let categoria = entradaDados.question('Informe sua categoria: ').toUpperCase();
let bonus = 0  
 switch (categoria){
    case 'A':
        bonus = salario * 0.05;
        console.log(`Novo salário: ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
        break;
    case 'B':    
        bonus = salario * 0.10;
        console.log(`Novo salário: ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
        break;
    case 'C':    
        bonus = salario * 0.15;
        console.log(`Novo salário: ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
        break;
    case 'D':    
        bonus = salario * 0.20;
        console.log(`Novo salário: ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
        break;
    default:
        console.log("Categoria Inválida!")
        break
 }