import rl from 'readline-sync';
/*let num = 0//rl.questionInt("Informe um número: ");

while (num <= 20) {
    if (num == 10)
        console.log(num);
    break;
}
num++


do {
    let num = rl.questionInt("Informe sua idade: ")

} while (num >= 18);*/


/*01. Escreva um programa que peça ao usuário para digitar um número e, em seguida,
imprima a tabuada desse número usando um loop while.*/
/*let num = rl.questionInt("Informe o número para gerar a tabuada: ");
let cont = 1;
while (cont<= 10) {
    console.log("---Tabuada---")
    console.log(`${num} x ${cont} = ${num * cont}`)
    cont ++
}*/

/*02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de
alunos.
O Programa deverá:
Ler o número de alunos da turma;
Ler as notas dos 4 bimestres de cada aluno;
Calcular e imprimir a média do aluno;
Calcular e imprimir a média da turma.*/
/*let numAlunos = rl.questionInt("Informe a quantidade de alunos: ");
let contaAlunos = 1;
let somaMedias = 0;
while (contaAlunos <= numAlunos){
    console.log(`Aluno ${contaAlunos}`)

    let contBimestre = 1;
    let somaNotas = 0;
    while (contBimestre <= 4){
        let nota = rl.questionInt(`Informe a nota do ${contBimestre}º bimestre do aluno ${contaAlunos}: `)
        somaNotas += nota;
        contBimestre ++;
    }

    let mediaAluno = somaNotas/4;
    somaMedias += mediaAluno;
    console.log(`Media do Aluno ${contaAlunos}: ${mediaAluno.toFixed(2)}`)
    contaAlunos ++;
}
let mediaGeralTurma =  somaMedias / numAlunos;
console.log(`Media Geral da Turma: ${mediaGeralTurma.toFixed(2)}`);

/*01. a) Escreva um programa que simule um jogo de adivinhação
onde o usuário deve adivinhar um número aleatório entre 1 e 100.
O programa deve fornecer dicas sobre se o número digitado é
maior ou menor que o número aleatório. O jogo deve continuar até
que o usuário adivinhe corretamente.*/
const numeroAleatorio = Math.floor(Math.random()*100)+1;
let palpite;

do {
    palpite = rl.questionInt("Tente adivinhar o número (entre 1 e 100): ")
    if (palpite === numeroAleatorio){
        console.log("Parabens! Você adivinhou o número.")
    } else if(palpite < numeroAleatorio){
        console.log("Tente número maior")
    } else{
        console.log("Tente número menor.")
    }

    } while (palpite !== numeroAleatorio);

/*02. Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o
valor de imposto de renda a ser pago.
Calcule o total de Imposto de Renda a ser pago conforme a tabela abaixo:
Salário <= R$ 2.100,00 = isento
Salário <= R$ 2.800,00 = 7,5%
Salário <= R$ 3.750,00 = 15%
Salário <= R$ 4.660,00 = 22.5%
Salário > R$ 4.660,00 = 27.5% */
for (let i = 1; i <= 10; 1++){
    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `)
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `)
    let impostoRenda = 0;

    if (salario <= 2100) {
    impostoRenda = 0;

    }else if (salario<= 2000){
    impostoRenda = salario * 0.075
    } else if (salario <= 3750) {
    impostoRenda = salario * 0.15;
    } else if (salario <= 4660){
    impostoRenda = salario * 0.225;
    } else {
    impostoRenda = salario * 0.275;
    }
    console.log(`Imposto de renda a ser pago`)
    console.log(`Nome: ${nome} \nImposto de Renda: ${impostoRenda.toFixed(2)}\n`);
}

let anterior = 0;
let atual = 1;
console.log("---Sequêncial")