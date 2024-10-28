document.getElementById('cadastroForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const quantidade = document.getElementById('quantidade').value;
    const dataLeitura = document.getElementById('dataLeitura').value;

    try {
        const response = await fetch('http://localhost:3000/consumo_agua/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, quantidade, dataLeitura }),
        });
        const result = await response.json();
        alert('Consumo registrado com sucesso!');
    } catch (error) {
        alert('Erro ao registrar consumo.');
    }
});
