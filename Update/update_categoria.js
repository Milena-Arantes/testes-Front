document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search)
    const id = parseInt(urlParams.get('id'))
    const formEditarCat = document.getElementById('formEditarCategoria')
    const btnEditCat = document.getElementById('btnEditarCategoria')
    document.getElementById('id').value = id;
    //quando clicar no botão
    btnEditCat.addEventListener('click', function(event){
        event.preventDefault()
    //pegar os dados do formulário
    const formData = new FormData(formEditarCat)
    const data = {};
    formData.forEach((value,key) => {
        data[key] = value;
    })

    //converter para os tipos declarados no prisma
    data.id = parseInt(data.id)

    //verificar conteúdo de data
    console.log('Dados do formulário:', data)

    fetch(`https://projeto-integrador-k9d3.onrender.com/api/categorias/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Verifica o status da resposta
        if (!response.ok) {
          return response.json().then(error => {
            console.error('Erro da API:', error);
            throw new Error(error.message || 'Erro ao editar os dados');
          }).catch(() => {
            // Se não conseguir extrair JSON, lança um erro genérico
            throw new Error('Erro ao editar os dados. Status: ' + response.status);
          });
        }
        return response.json();
      })
      .then(result => {
        console.log('Dados editados com sucesso!', result);
        alert(`Categoria editada com Sucesso!`);
        window.location.href = '../Read/consulta_categoria.html';
      })
      .catch(error => {
        console.error('Erro ao editar os dados:', error);
        alert('Erro ao editar! Cheque se preencheu todos os campos corretamente!');
      });
    });
  });