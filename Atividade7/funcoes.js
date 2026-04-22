
function maiorDetres(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}


function ordenarCrescente(a, b, c) {
  const arr = [a, b, c];
  arr.sort((x, y) => x - y);
  return arr;
}


function ehPalindromo(str) {
  const limpa = str.toUpperCase().replace(/\s/g, "");
  const invertida = limpa.split("").reverse().join("");
  return limpa === invertida;
}

console.log(ehPalindromo("arara")); 

function verificarSubconjunto(palavra1, palavra2) {
  if (!palavra1 || !palavra2) return "erro";
  const p1 = palavra1.toLowerCase();
  const p2 = palavra2.toLowerCase();
  // verifica se todos os caracteres de p2 estão contidos em p1
  for (let char of p2) {
    if (!p1.includes(char)) return "não é um subconjunto";
  }
  return "é um subconjunto";
}


function diaDaSemana(dataStr) {
  const dias = [
    "Domingo", "Segunda-feira", "Terça-feira",
    "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
  ];
  const [ano, mes, dia] = dataStr.split("-").map(Number);
  const data = new Date(ano, mes - 1, dia);
  if (isNaN(data.getTime())) return "Data inválida";
  return dias[data.getDay()];
}