// script.js
let nomes = [];

document.getElementById('adicionarNome').addEventListener('click', function() {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();

    if (nome) {
        nomes.push(nome);
        nomeInput.value = ''; // Limpar o campo de entrada
        atualizarListaNomes();
    } else {
        alert('Por favor, digite um nome.');
    }
});

document.getElementById('sortearNome').addEventListener('click', function() {
    if (nomes.length > 0) {
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        const nomeSorteado = nomes[indiceSorteado];
        document.getElementById('nomeSorteado').innerText = nomeSorteado;
    } else {
        alert('Adicione nomes antes de sortear.');
    }
});

function atualizarListaNomes() {
    const listaNomes = document.getElementById('listaNomes');
    listaNomes.innerHTML = ''; // Limpa a lista atual

    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}
