const sistemaDeArquivos = require('fs');
const conteudoDoTexto = sistemaDeArquivos.readFileSync('file.txt', 'utf-8');

console.log("--- Conteúdo do Arquivo ---");
console.log(conteudoDoTexto);
