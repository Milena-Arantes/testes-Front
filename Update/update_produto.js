document.addEventListener("DOMContentLoaded", function() {
    const formEditar_Prod = document.getElementById('formEditarProd');
    const params = new URLSearchParams(window.location.search);
    const produtoId = params.get('id');

    if (!produtoId) {
        alert('ID do produto não especificado.');
        return;
    }

//dados existentes
    fetch(`https://projeto-integrador-k9d3.onrender.com/api/produtos/${produtoId}`)
        .then(response => response.json())
        .then(data => {
            // preencher o formulario com os dados existentes
            document.getElementById('nome').value = data.nome;
            document.getElementById('categoria').value = data.categoriaId;
            document.getElementById('preco').value = data.preco;
            document.getElementById('quantidade').value = data.estoque;
        })
        .catch(error => console.error('Erro ao carregar dados do produto:', error));

    // solicitando edição do produto
    formEditar_Prod.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(formEditar_Prod);
        const updatedData = {
            nome: formData.get('nome'),
            categoriaId: formData.get('categoria'),
            preco: parseFloat(formData.get('preco')),
            estoque: parseInt(formData.get('quantidade'))
        };

        fetch(`https://projeto-integrador-k9d3.onrender.com/api/produtos/${produtoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => {
            if (response.ok) {
                alert('Produto atualizado com sucesso!');
                window.location.href = 'consulta_produto.html'; // volta para a lista
            } else {
                throw new Error('Erro ao atualizar produto');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao atualizar produto.');
        });
    });
});
