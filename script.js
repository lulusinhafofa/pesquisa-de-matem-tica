function calcularEstatisticas() {
    const input = document.getElementById('numbers').value;
    const numeros = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    const media = calcularMedia(numeros);
    const mediana = calcularMediana(numeros);
    const moda = calcularModa(numeros);

    document.getElementById('media').innerText = `Média: ${media}`;
    document.getElementById('mediana').innerText = `Mediana: ${mediana}`;
    document.getElementById('moda').innerText = `Moda: ${moda}`;
}

function calcularMedia(numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return (soma / numeros.length).toFixed(2);
}

function calcularMediana(numeros) {
    numeros.sort((a, b) => a - b);
    const meio = Math.floor(numeros.length / 2);

    if (numeros.length % 2 === 0) {
        return ((numeros[meio - 1] + numeros[meio]) / 2).toFixed(2);
    } else {
        return numeros[meio].toFixed(2);
    }
}

function calcularModa(numeros) {
    const contagem = {};
    numeros.forEach(num => {
        contagem[num] = (contagem[num] || 0) + 1;
    });

    const maxContagem = Math.max(...Object.values(contagem));
    const modas = Object.keys(contagem).filter(num => contagem[num] === maxContagem);

    return modas.length === numeros.length ? "Sem moda" : modas.join(', ');
}
