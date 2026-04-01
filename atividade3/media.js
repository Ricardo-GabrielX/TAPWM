alert("Bem-vindo! Vamos calcular a média de um aluno.");

const nome = prompt("Digite o nome do aluno:");

const n1 = parseFloat(prompt("Digite a 1ª nota:"));
const n2 = parseFloat(prompt("Digite a 2ª nota:"));
const n3 = parseFloat(prompt("Digite a 3ª nota:"));

const media = (n1 + n2 + n3) / 3;

alert(
    "Aluno: " + nome +
    "\nMédia final: " + media.toFixed(2)
);