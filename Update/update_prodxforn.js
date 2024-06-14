document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search)
    const id = parseInt(urlParams.get('id'))
    const formEditarProdxForn = document.getElementById('formEditarProdxForn')
    const btnSalvarProdxForn = document.getElementById('btnEditarProdxForn')
    document.getElementById('id').value = id;

    fetch(`https://projeto-integrador-k9d3.onrender.com/api/produtoFornecedor/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados do produto${id}`);
        }
        return response.json();
      })
      .then(data => {
       // Preenche os campos do formulário com os dados do fornecedor
        document.getElementById('produtoId').value = data.produtoId;
        document.getElementById('fornecedorId').value = data.fornecedorId;
      })
      .catch(error => {
        console.error('Erro ao carregar dados do fornecedor:', error);
        alert('Erro ao carregar os dados do fornecedor. Por favor, tente novamente.');
      });
    //quando clicar no botão
    btnSalvarProdxForn.addEventListener('click', function(event){
        event.preventDefault()
    //pegar os dados do formulário
    const formData = new FormData(formEditarProdxForn)
    const data = {};
    formData.forEach((value,key) => {
        data[key] = value;
    })

    //converter para os tipos declarados no prisma
    data.fornecedorId = parseInt(data.fornecedorId)
    data.produtoId = parseInt(data.produtoId)

    //verificar conteúdo de data
    console.log('Dados do formulário:', data)

    fetch(`https://projeto-integrador-k9d3.onrender.com/api/produtoFornecedor/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

    })
})