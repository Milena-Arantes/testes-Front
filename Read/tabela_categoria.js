const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = '../menu/menu_categoria.html';
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://projeto-integrador-k9d3.onrender.com/api/categorias')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#listaCategorias tbody');
            if (!tableBody) {
                console.error('Elemento tbody não encontrado!');
                return;
            }
            data.forEach((categoria, index) => {
                const row = document.createElement('tr');
                // Simulando dados adicionais para as colunas
                const nome = categoria.nome;
                const descricao = categoria.descricao;

                row.innerHTML = `
                    <td>${categoria.id}</td>
                    <td>${nome}</td>
                    <td>${descricao}</td>
                    <th><button class="btnEditar" data-id="${categoria.id}">Editar</button></th>
                    <th><button class="btnDeletar" data-id="${categoria.id}">Deletar</button></th>
                `;
                tableBody.appendChild(row);
            });

            tableBody.addEventListener('click', function(event){
                if (event.target.classList.contains('btnEditar')) {
                    const id = event.target.getAttribute('data-id');
                    editarcategoria(id);
                }
                else if(event.target.classList.contains('btnDeletar')){
                    const id = event.target.getAttribute('data-id');
                    const rowElement = event.target.closest('tr');
                    deletarcategoria(id, rowElement);
                }
            });
        })
        .catch(error => console.error('Erro ao carregar categorias:', error));
    });

    function editarcategoria(id) {
        alert(`Editar categoria com ID: ${id}`);
        window.location.href = `../Update/update_categoria.html?id=${id}`;
        }

    function deletarcategoria(id, rowElement){
        const confirmDelete = confirm('Tem certeza de que deseja deletar este categoria?');
        if(confirmDelete){
            fetch(`https://projeto-integrador-k9d3.onrender.com/api/categorias/${id}`,{
                method: 'DELETE',
            })
            .then(response=>{
                if(response.ok){
                    rowElement.remove();
                } else{
                    console.error('Erro ao deletar categoria:', response.statusText);
                }
            })
            .catch(error => console.error('Erro ao deletar categoria:', error));
        }
    }