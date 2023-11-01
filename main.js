const form = document.getElementById('form-agenda');
let linhas = '';
let numeroDeContatos = 0; // Inicializa o número de contatos

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '<td><img id="avatar" src="./images/avatar.PNG"></td>';
    linha += '</tr>';
    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    inputNomeContato.value = '';
    inputNumeroContato.value = '';

    numeroDeContatos++; // Incrementa o número de contatos
    atualizarNumeroContatos(); // Chama a função para atualizar o número de contatos na tabela
});

function atualizarNumeroContatos() {
    const numeroContatosCelula = document.querySelector('tfoot td:nth-child(2)');
    numeroContatosCelula.textContent = numeroDeContatos;
}
