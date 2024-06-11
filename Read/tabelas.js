const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.history.back();
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://projeto-integrador-k9d3.onrender.com/api/produtos')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#listaProdutos tbody');
            if (!tableBody) {
                console.error('Elemento tbody não encontrado!');
                return;
            }
            data.forEach((produto, index) => {
                const row = document.createElement('tr');
                // Simulando dados adicionais para as colunas
                const nome = produto.nome;
                const categoria = produto.categoriaId;
                const preco = produto.preco;
                const quantidade = produto.estoque;

                row.innerHTML = `
                    <td>${produto.id}</td>
                    <td>${nome}</td>
                    <td>${categoria}</td>
                    <td>${preco}</td>
                    <td>${quantidade}</td>
                    <th><button class="btnEditar" data-id="${produto.id}">Editar</button></th>
                    <th><button class="btnDelete" data-id="${produto.id}">Deletar</button></th>
                `;
                tableBody.appendChild(row);
            });

            tableBody.addEventListener('click',)
        })
        .catch(error => console.error('Erro ao carregar produtos:', error))
});
