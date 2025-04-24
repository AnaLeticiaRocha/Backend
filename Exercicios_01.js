//1) Escreva um programa que declare duas variaveis, 'nome' e 'idade', e as
//imprima em um console em uma frase que diga “Olá, meu nome é [nome]
//e eu tenho [idade] anos”.
let nome = 'Ana Letícia'
let idade = 17
console.log('Olá, meu nome é ' + nome + ' e eu tenho ' + idade + ' anos.');

//2) Declare uma string e utilize métodos para converter para maiúsculas e minúsculas.
let frase = 'Boa Tarde'
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

//3) Declare uma variável e verifique se o tipo dela é number.
let numero = 50
console.log(typeof numero);

//4) Calcule o Índice de Massa Corporal (IMC) utilizando variáveis para altura e peso.
let altura = 70;
let peso = 1.75;
let imc = (peso / (altura * altura)).toFixed(2)
console.log(`Seu IMC é: ${imc}`);