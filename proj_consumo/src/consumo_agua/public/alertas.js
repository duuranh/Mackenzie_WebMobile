document.getElementById('alertasForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const userId = document.getElementById('userId').value;

    try {
        const response = await fetch(`http://localhost:3000/consumo_agua/alerta/${userId}`);
        const alerta = await response.json();
        const resultadoDiv = document.getElementById('alertaResultado');
        resultadoDiv.innerHTML = alerta ? 'Consumo elevado!' : 'Consumo normal.';
    } catch (error) {
        alert('Erro ao verificar alerta.');
    }
});
