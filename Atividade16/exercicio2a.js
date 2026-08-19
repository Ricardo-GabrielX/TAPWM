console.log('Passo 1');
executarComAtraso();
console.log('Passo 3');

function executarComAtraso() {
    setTimeout(() => {
        console.log('Passo 2 (Assíncrono)');
    }, 15);
}