document.getElementById('historicoForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const dataInicial = document.getElementById('dataInicial').value;
    const dataFinal = document.getElementById('dataFinal').value;

    try {
        const response = await fetch(`http://localhost:3000/consumo_agua/historico?userId=${userId}&dataInicial=${dataInicial}&dataFinal=${dataFinal}`);
        const historico = await response.json();
        const resultadosDiv = document.getElementById('historicoResultados');
        resultadosDiv.innerHTML = `<pre>${JSON.stringify(historico, null, 2)}</pre>`;
    } catch (error) {
        alert('Erro ao consultar histórico.');
    }
});
