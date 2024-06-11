/*document.addEventListener("DOMContentLoaded", function(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data=>{
        const tableBody = document.querySelector('#product-table tbody');
        data.forEach(produto =>{
            const row = document.createElement('tr');
            row.innerHTML =`
                <th>id</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Fornecedor</th>
                <th>Preço</th>
                <th>Quantidade</th>
                `;
            tableBody.appendChild(row);
        });
    });
    .catch(error => console.error('Erro ao carregar produtos:', error));
}*/

const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.history.back();
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
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
                const categoria = "Categoria " + (index % 5 + 1);
                const fornecedor = "Fornecedor " + (index % 3 + 1);
                const preco = (Math.random() * 100).toFixed(2);
                const quantidade = Math.floor(Math.random() * 50) + 1;

                row.innerHTML = `
                    <td>${produto.id}</td>
                    <td>${produto.title}</td>
                    <td>${categoria}</td>
                    <td>${fornecedor}</td>
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
