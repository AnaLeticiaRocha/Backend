/*
 var 'é possivel redeclarar o nome da variavel' , let 'variavel, manipulável' ou const 'constante, não muda o valor'
number var valor=20;
valor.toFixed(2) '20.00'
boolean var ativo= true
ativo.to String(); 'true'
 string var nome = hello
nome.toLowerCase(); 'para letras minuscula'
typeof antes do nome da variavel var valor=4;
console.log (typeof valor)
propriedades não tem parenteses, função tem
 array 'coleção de dados, podemos armazenar mais de um valor em uma variavel'
let estados = ['Rio de Janeiro', 'São Paulo', 'Bahia'];
estados [0] 'acessar o primeiro valor'
 estados [2] = 'C' 'para mudar o valor'
 let vaga = ['programador php', 5, true]; 'Pode ter mais de um tipo de valor'
.length para contar
 let linguagens = ['JavaScript', 'PHP', 'C#', 'JAVA']
console.log(linguagens.length);
let telefones = [(11) 98899 - 8787, (22)3455 - 8819, (91) 9562 - 0000] 'armazena varios valores'
undefined 'valor indefinido'
 null 'não atribuir valor para a variavel'
let nome=null;
console.log("Olá, meu nome é" +nome+ "eu tenho" +idade+ "anos.")//concatenação
console.log(`Olá, meu nome é ${nome} eu tenho ${idade} anos.`) //interpolação
há problema em usar vírgula, pois ela não converte o valor da variavel para string
let valor = 10
let outrovalor = valor passagem como valor -> passa uma copia do valor
console.log("Valor: " + valor)
console.log("Outro valor: " + outrovalor)
outrovalor = 15
console.log("Valor: " + valor)
console.log("Outro valor: " + outrovalor)
let carro = {
  cor: "Azul"
} 
let bicicleta = carro passagem como referencia -> passa o endereço do objeto na memória
console.log("Carro:" + carro.cor)
console.log("Bicicleta: " + bicicleta.cor)
bicicleta.cor = "Verde"
console.log("Carro:" + carro.cor)
console.log("Bicicleta: " + bicicleta.cor)
 para comentar mais de uma linha use /* texto/*
while (condição){
 declaração
}
Do While:
do{
declaração
} while (condição)
For:
for (let index =0; index <array.length; index++){      enquanto for verdadeiro ele executa. cria variavel controle, é menor? sim então guarda, e encrementa, verifica se
                                                        é menor? sim, então atualiza a variavel, e se repete até se tornar falso. inicialização, teste e encremento(atualiza o
                                                        valor da variavel)
 const element = array[index];
}
break interrompe quaisquer desses loops.
continue reinicia quaisquer desses loops.
em while, volta para a condição.
em for, pula para a expressção de incrementação.
for in:
let aluno = {
nome: "Marcos",
email: "marcos@email.com",
idade: 25,
};
for (let dados in aluno) {
    console.log(aluno[dados]);
}
for of:
let clientes_array = [
{id: 1, nome: "Mônica", telefone: "99999-6565},
{id: 2, nome: "Tânia", telefone: "99999-0778"},
{id: 3, nome: "Carlos", telefone: "99999-0551"};
];
for (let cliente of clientes_array) {
console.log(`Nome: ${cliente.nome} - Telefone: ${cliente.telefone}`)
}
*/