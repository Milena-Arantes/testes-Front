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
                    <th><button class="btnDeletar" data-id="${movimentacoes.id}">Deletar</button></th>
                `;
                tableBody.appendChild(row);
            });

            tableBody.addEventListener('click', function(event){
                if (event.target.classList.contains('btnEditar')) {
                    const id = event.target.getAttribute('data-id');
                    editarMovimentacao(id);
                }
                else if(event.target.classList.contains('btnDeletar')){
                    const id = event.target.getAttribute('data-id');
                    const rowElement = event.target.closest('tr');
                    deletarMovimentacao(id, rowElement);
                }
            });
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
    });

    function editarMovimentacao(id) {
        alert(`Editar movimentação com ID: ${id}`);
        window.location.href = "../Update/update_movimentacao.html";
        }

    function deletarMovimentacao(id, rowElement){
        const confirmDelete = confirm('Tem certeza de que deseja deletar esta movimentação?');
        if(confirmDelete){
            fetch(`https://projeto-integrador-k9d3.onrender.com/api/movimentacoes/${id}`,{
                method: 'DELETE',
            })
            .then(response=>{
                if(response.ok){
                    rowElement.remove();
                } else{
                    console.error('Erro ao deletar movimentação:', response.statusText);
                }
            })
            .catch(error => console.error('Erro ao deletar movimentação:', error));
        }
    }