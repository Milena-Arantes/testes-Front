const btn_Voltar = document.getElementById('btnVoltar');
btn_Voltar.addEventListener('click', function(event){
  event.preventDefault();
  window.history.back();
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://projeto-integrador-k9d3.onrender.com/api/produtoFornecedor')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#listaProdutoFornecedor tbody');
            if (!tableBody) {
                console.error('Elemento tbody não encontrado!');
                return;
            }
            data.forEach((produtoFornecedor, index) => {
                const row = document.createElement('tr');
                const produtoId = produtoFornecedor.produtoId;
                const fornecedorId = produtoFornecedor.fornecedorId;

                row.innerHTML = `
                    <td>${produtoFornecedor.id}</td>
                    <td>${produtoId}</td>
                    <td>${fornecedorId}</td>
                    <th><button class="btnEditar" data-id="${produtoFornecedor.id}">Editar</button></th>
                    <th><button class="btnDeletar" data-id="${produtoFornecedor.id}">Deletar</button></th>
                `;
                tableBody.appendChild(row);
            });

            tableBody.addEventListener('click', function(event){
                if (event.target.classList.contains('btnEditar')) {
                    const id = event.target.getAttribute('data-id');
                    editarprodutoFornecedor(id);
                }
                else if(event.target.classList.contains('btnDeletar')){
                    const id = event.target.getAttribute('data-id');
                    const rowElement = event.target.closest('tr');
                    deletarprodutoFornecedor(id, rowElement);
                }
            });
        })
        .catch(error => console.error('Erro ao carregar relação:', error));
    });
    function editarprodutoFornecedor(id) {
        alert(`Editar produto com ID: ${id}`);
        window.location.href = "../Update/update_produto.html?id=${id}";
        }

    function deletarprodutoFornecedor(id, rowElement){
        const confirmDelete = confirm('Tem certeza de que deseja deletar este produto?');
        if(confirmDelete){
            fetch(`https://projeto-integrador-k9d3.onrender.com/api/produtoFornecedor/${id}`,{
                method: 'DELETE',
            })
            .then(response=>{
                if(response.ok){
                    rowElement.remove();
                } else{
                    console.error('Erro ao deletar produto:', response.statusText);
                }
            })
            .catch(error => console.error('Erro ao deletar produto:', error));
        }
    }