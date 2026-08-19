let totalCalculado = 0;
for (let indice = 2; indice < process.argv.length; indice++) {
    totalCalculado += parseFloat(process.argv[indice]);
}
console.log(`O resultado da soma é: ${totalCalculado}`);