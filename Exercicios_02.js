//1) Crie um programa que declare duas variáveis e exiba o resultado da soma,
// subtração, multiplicação e divisão desses números.
let n1 = 200
let n2 = 20
let soma = n1 + n2
let subtracao = n1 - n2
let multiplicacao = n1 * n2
let divisao = n1 / n2
console.log(`Dado os valores ${n1} e ${n2}. Soma: ${soma}; Subtração: ${subtracao}; Multiplicação: ${multiplicacao}; Divisão: ${divisao}.`)

//2)Declare duas idades e utilize operadores de comparação para verificar se uma
// pessoa é mais velha que a outra.
let p1 = 25 
let p2 = 42
let idade = p1 == p2 ? "Elas tem a mesma idade" : "Elas não tem a mesma idade"
console.log(idade)

//3) Crie uma variável idade com um número e use o operador ternário para verificar
// se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de
// idade” ou “Menor de idade”.
let n = 30
let verificar = n >= 18 ? "Maior de idade" : "Menor de idade"
console.log(verificar)

//4) Crie uma variável com um número e use o operador ternário para verificar se é
// par ou ímpar
let num = 28
let verifique = num % 2 == 0 ? "Par" : "Ímpar"
console.log(verifique)