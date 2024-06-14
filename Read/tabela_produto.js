const btn_Voltar = document.getElementById('btnVoltar');
btn_Voltar.addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = '../menu/menu_produto.html';
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
                    const nome = produto.nome;
                    const descricao = produto.descricao;
                    const categoria = produto.categoriaId;
                    const preco = produto.preco;
                    const quantidade = produto.estoque;
                    const foto = produto.foto;

                    row.innerHTML = `
                        <td><img src="${foto}" class ="foto" alt="${nome}"></td>
                        <td>${produto.id}</td>
                        <td>${nome}</td>
                        <td>${descricao}</td>
                        <td>${categoria}</td>
                        <td>${preco}</td>
                        <td>${quantidade}</td>
                        <th><button class="btnEditar" data-id="${produto.id}">Editar</button></th>
                        <th><button class="btnDeletar" data-id="${produto.id}">Deletar</button></th>
                    `;
                    tableBody.appendChild(row);
                });

                tableBody.addEventListener('click', function(event) {
                    if (event.target.classList.contains('btnEditar')) {
                        const id = event.target.getAttribute('data-id');
                        editarProduto(id);
                    } else if (event.target.classList.contains('btnDeletar')) {
                        const id = event.target.getAttribute('data-id');
                        const rowElement = event.target.closest('tr');
                        deletarProduto(id, rowElement);
                    }
                });
            })
            .catch(error => console.error('Erro ao carregar produtos:', error));
    });

    function editarProduto(id) {
        alert(`Editar produto com ID: ${id}`);
        window.location.href = `../Update/update_produto.html?id=${id}`;
    }

    function deletarProduto(id, rowElement) {
        const confirmDelete = confirm('Tem certeza de que deseja deletar este produto?');
        if (confirmDelete) {
            fetch(`https://projeto-integrador-k9d3.onrender.com/api/produtos/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    rowElement.remove();
                } else {
                    console.error('Erro ao deletar produto:', response.statusText);
                }
            })
            .catch(error => console.error('Erro ao deletar produto:', error));
        }
    }
