// Seleciona os elementos do range e do display do valor
const range = document.getElementById('r');
const rangevalue = document.getElementById('rangevalue');

// Adiciona event listeners para atualizar o valor do range em tempo real
range.addEventListener('input', function() {
    rangevalue.textContent = this.value; // Atualiza o valor do range
});


