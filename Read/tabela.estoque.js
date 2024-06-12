/*const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.history.back();
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://projeto-integrador-k9d3.onrender.com/api/movimentacoes')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#controleEstoque tbody');
            if (!tableBody) {
                console.error('Elemento tbody não encontrado!');
                return;
            }
            data.forEach((movimentacoes, index) => {
                const row = document.createElement('tr');
                // Simulando dados adicionais para as colunas
                const quantidade = movimentacoes.quantidade;
                const dataValidade = movimentacoes.Validade;
                const dataEntrada = movimentacoes.data;
                const codMovimentacao = movimentacoes.codigoMovimentacao;

                row.innerHTML = `
                    <td>${movimentacoes.id}</td>
                    <td>${movimentacoes.produtoId}</td>
                    <td>${quantidade}</td>
                    <td>${dataValidade}</td>
                    <td>${dataEntrada}</td>
                    <td>${codMovimentacao}</td>
                    <th><button class="btnEditar" data-id="${movimentacao.id}">Editar</button></th>
                    <th><button class="btnDelete" data-id="${movimentacao.id}">Deletar</button></th>
                `;
                tableBody.appendChild(row);
            });

            tableBody.addEventListener('click',)
        })
        .catch(error => console.error('Erro ao carregar produtos:', error))
});*/

const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.history.back();
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://projeto-integrador-k9d3.onrender.com/api/movimentacoes')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#controleEstoque tbody');
            if (!tableBody) {
                console.error('Elemento tbody não encontrado!');
                return;
            }
            data.forEach((movimentacoes, index) => {
                const row = document.createElement('tr');

                const id = movimentacoes.id;
                const produtoId = movimentacoes.produtoId;
                const quantidade = movimentacoes.quantidade;
                const dataValidade = movimentacoes.validade;  // Corrigido: "validade" em vez de "Validade"
                const dataEntrada = movimentacoes.data;
                const codMovimentacao = movimentacoes.codigoMovimentacao;

                row.innerHTML = `
                    <td>${id}</td>
                    <td>${produtoId}</td>
                    <td>${quantidade}</td>
                    <td>${dataValidade}</td>
                    <td>${dataEntrada}</td>
                    <td>${codMovimentacao}</td>
                    <th><button class="btnEditar" data-id="${movimentacoes.id}">Editar</button></th>
                    <th><button class="btnDelete" data-id="${movimentacoes.id}">Deletar</button></th>
                `;
                tableBody.appendChild(row);
            });

            tableBody.addEventListener('click',)
        })
        .catch(error => console.error('Erro ao carregar produtos:', error))
});

                   

