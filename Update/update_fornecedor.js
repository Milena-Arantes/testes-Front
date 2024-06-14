document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search)
  const id = parseInt(urlParams.get('id'))
  const formEditarForn = document.getElementById('formEditarForn')
  const btnSalvarForn = document.getElementById('btnEditarForn')
  document.getElementById('id').value = id;

  fetch(`https://projeto-integrador-k9d3.onrender.com/api/fornecedores/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao buscar dados do produto${id}`);
      }
      return response.json();
    })
    .then(data => {
     // Preenche os campos do formulário com os dados do fornecedor
      document.getElementById('nome').value = data.nome;
      document.getElementById('telefone').value = data.telefone;
      document.getElementById('email').value = data.email;
    })
    .catch(error => {
      console.error('Erro ao carregar dados do fornecedor:', error);
      alert('Erro ao carregar os dados do fornecedor. Por favor, tente novamente.');
    });
  //quando clicar no botão
  btnSalvarForn.addEventListener('click', function(event){
      event.preventDefault()
  //pegar os dados do formulário
  const formData = new FormData(formEditarForn)
  const data = {};
  formData.forEach((value,key) => {
      data[key] = value;
  })

  //converter para os tipos declarados no prisma
  data.id = parseInt(data.id)

  //verificar conteúdo de data
  console.log('Dados do formulário:', data)

  fetch(`https://projeto-integrador-k9d3.onrender.com/api/fornecedores/${id}`,{
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
      alert(`fornecedor editado com Sucesso!`);
      window.location.href = '../Read/consulta_fornecedor.html';
    })
    .catch(error => {
      console.error('Erro ao editar os dados:', error);
      alert('Erro ao editar! Cheque se preencheu todos os campos corretamente!');
    });
  });
});