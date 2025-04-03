//Primeiro Hello World
// var 'é possivel redeclarar o nome da variavel' , let 'variavel, manipulável' ou const 'constante, não muda o valor'
//number var valor=20;
//valor.toFixed(2) '20.00'
//boolean var ativo= true
//ativo.to String(); 'true'
// string var nome = hello
//nome.toLowerCase(); 'para letras minuscula'
//typeof antes do nome da variavel var valor=4; 
//console.log (typeof valor) 
//propriedades não tem parenteses, função tem
// array 'coleção de dados, podemos armazenar mais de um valor em uma variavel'
//let estados = ['Rio de Janeiro', 'São Paulo', 'Bahia']; 
//estados [0] 'acessar o primeiro valor'
// estados [2] = 'C' 'para mudar o valor'
// let vaga = ['programador php', 5, true]; 'Pode ter mais de um tipo de valor'
//.length para contar
// let linguagens = ['JavaScript', 'PHP', 'C#', 'JAVA']
//console.log(linguagens.length);
//let telefones = [(11) 98899 - 8787, (22)3455 - 8819, (91) 9562 - 0000] 'armazena varios valores'
//undefined 'valor indefinido'
// null 'não atribuir valor para a variavel'
//let nome=null;
//1) Escreva um programa que declare duas variaveis, 'nome' e 'idade', e as
//imprima em um console em uma frase que diga “Olá, meu nome é [nome]
//e eu tenho [idade] anos”.
let nome = 'Ana Letícia'
let idade = 17
console.log('Olá, meu nome é ', nome, 'e eu tenho ', idade, 'anos');

//2) Declare uma string e utilize métodos para converter para maiúsculas e minúsculas.
let frase = 'Boa Tarde'
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

//3) Declare uma variável e verifique se o tipo dela é number.
let numero = 50
console.log(typeof numero);

//4) Calcule o Índice de Massa Corporal (IMC) utilizando variáveis para altura e peso.
let altura = 1.50
let peso = 50
let imc = peso/(altura**2)
console.log(imc.toFixed(2));