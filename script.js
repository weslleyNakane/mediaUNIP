function calcularMedia() {
    let prova = parseFloat(document.getElementById('prova').value.replace(',', '.'));
    let pim = parseFloat(document.getElementById('pim').value.replace(',', '.'));
    let ava = parseFloat(document.getElementById('ava').value.replace(',', '.'));

    if (isNaN(prova) || isNaN(pim) || isNaN(ava)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    let media = (7 * prova + 2 * pim + ava) / 10;

    let resultado = `Média Final: ${media.toFixed(2)}\n`;
    resultado += media >= 7 ? "Aprovado!" : "Reprovado!";

    document.getElementById('resultado').innerText = resultado;
}
