const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = '../menu/menu_fornecedor.html';
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://projeto-integrador-k9d3.onrender.com/api/fornecedores')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#listaFornecedores tbody');
            if (!tableBody) {
                console.error('Elemento tbody não encontrado!');
                return;
            }
            data.forEach((fornecedor, index) => {
                const row = document.createElement('tr');
                // Simulando dados adicionais para as colunas
                const nome = fornecedor.nome;
                const telefone = fornecedor.telefone;
                const email = fornecedor.email;

                row.innerHTML = `
                    <td>${fornecedor.id}</td>
                    <td>${nome}</td>
                    <td>${telefone}</td>
                    <td>${email}</td>
                    <th><button class="btnEditar" data-id="${fornecedor.id}">Editar</button></th>
                    <th><button class="btnDeletar" data-id="${fornecedor.id}">Deletar</button></th>
                `;
                tableBody.appendChild(row);
            });

            tableBody.addEventListener('click', function(event){
                if (event.target.classList.contains('btnEditar')) {
                    const id = event.target.getAttribute('data-id');
                    editarFornecedor(id);
                }
                else if(event.target.classList.contains('btnDeletar')){
                    const id = event.target.getAttribute('data-id');
                    const rowElement = event.target.closest('tr');
                    deletarFornecedor(id, rowElement);
                }
            });
        })
        .catch(error => console.error('Erro ao carregar fornecedors:', error));
    });

    function editarFornecedor(id) {
        alert(`Editar fornecedor com ID: ${id}`);
        window.location.href = `../Update/update_fornecedor.html?id=${id}`;;
        }

    function deletarFornecedor(id, rowElement){
        const confirmDelete = confirm('Tem certeza de que deseja deletar este fornecedor?');
        if(confirmDelete){
            fetch(`https://projeto-integrador-k9d3.onrender.com/api/fornecedores/${id}`,{
                method: 'DELETE',
            })
            .then(response=>{
                if(response.ok){
                    rowElement.remove();
                } else{
                    console.error('Erro ao deletar fornecedor:', response.statusText);
                }
            })
            .catch(error => console.error('Erro ao deletar fornecedor:', error));
        }
    }