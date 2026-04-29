function processarNumeros(a, b, c) {
    const soma = a + b + c;
    const quad1 = a * a;
    const quad2 = b * b;
    return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quad1} e o quadrado do segundo é: ${quad2}`;
}

function calcular() {
    const vals = [
        Number(document.getElementById('n1').value),
        Number(document.getElementById('n2').value),
        Number(document.getElementById('n3').value)
    ];
    const res = processarNumeros.apply(null, vals);
    document.getElementById('output1').innerText = res;
}

function embaralhar(letras) {
    return [...letras].sort(() => Math.random() - 0.5).join('');
}

function gerar() {
    const letras = [
        document.getElementById('l1').value,
        document.getElementById('l2').value,
        document.getElementById('l3').value,
        document.getElementById('l4').value,
        document.getElementById('l5').value
    ];

    let palavras = [];
    while (palavras.length < 10) {
        let combinacao = embaralhar.apply(null, [letras]);
        if (!palavras.includes(combinacao)) {
            palavras.push(combinacao);
        }
    }

    const lista = palavras.map(p => `<li>${p}</li>`).join('');
    document.getElementById('output2').innerHTML = `<ul>${lista}</ul>`;
}