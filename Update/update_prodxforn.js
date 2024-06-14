document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search)
    const id = parseInt(urlParams.get('id'))
    const formEditarProdxForn = document.getElementById('formEditarProdxForn')
    const btnSalvarProdxForn = document.getElementById('btnEditarProdxForn')
    document.getElementById('id').value = id;
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