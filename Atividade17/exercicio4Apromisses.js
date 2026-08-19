function Parte1(){
    for(let i = 1; i <= 10; i++) {
        console.log("primeira parte: " + i);
    }
}
setTimeout(Parte1, 2000);
const fs = require('fs').promises
fs.readFile('file.txt', "utf-8")
    .then((data) => {
        console.log(data);
        const registros = data.split('\n');
        registros.forEach((registro) => {
            console.log("segunda parte: " + registro);
        });
    })
    .catch((err) => {
        console.log("Erro ao ler o arquivo: " + err);
        throw err;
    });