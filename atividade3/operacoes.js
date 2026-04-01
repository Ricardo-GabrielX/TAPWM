alert("Vamos realizar operações entre dois números.");

const a = parseFloat(prompt("Digite o primeiro número:"));
const b = parseFloat(prompt("Digite o segundo número:"));

const soma = a + b;
const subtracao = a - b;
const produto = a * b;
const divisao = a / b;
const resto = a % b;

let mensagem =
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração (a - b): " + subtracao +
    "\nProduto: " + produto +
    "\nDivisão (a / b): " + divisao +
    "\nResto da divisão: " + resto;

alert(mensagem);