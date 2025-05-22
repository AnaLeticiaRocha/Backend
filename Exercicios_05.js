import entradaDados from 'readline-sync';
let num = 0//rl.questionInt("Informe um número: ");

while (num <= 20) {
    if (num == 10)
        console.log(num);
    break;
}
num++


do {
    let num = rl.questionInt("Informe sua idade: ")

} while (num >= 18);