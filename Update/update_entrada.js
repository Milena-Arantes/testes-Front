document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search)
  const id = parseInt(urlParams.get('id'))
  const formEditEntrada = document.getElementById('formEditarEntrada')
  const btnEditEntrada = document.getElementById('btnEditarEntrada')
  document.getElementById('id').value = id;

  fetch(`https://projeto-integrador-k9d3.onrender.com/api/movimentacoes/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao buscar dados da entrada${id}`);
      }
      return response.json();
    })
    .then(data => {
     // Preenche os campos do formulário com os dados do fornecedor
      document.getElementById('produtoId').value = data.produtoId;
      document.getElementById('quantidade').value = data.quantidade;
      document.getElementById('data').value = data.data;
      document.getElementById('validade').value = data.validade;
      document.getElementById('codigoMovimentacao').value = data.codigoMovimentacao;
    })
    .catch(error => {
      console.error('Erro ao carregar dados do fornecedor:', error);
      alert('Erro ao carregar os dados do fornecedor. Por favor, tente novamente.');
    });
  //quando clicar no botão
  btnEditEntrada.addEventListener('click', function(event){
      event.preventDefault()
  //pegar os dados do formulário
  const formData = new FormData(formEditEntrada)
  const data = {};
  formData.forEach((value,key) => {
      data[key] = value;
  })

  //converter para os tipos declarados no prisma
  data.id = parseInt(data.id);
  data.produtoId = parseInt(data.produtoId);
  data.quantidade = parseFloat(data.quantidade);
  data.codigoMovimentacao = parseInt(data.codigoMovimentacao);

  //verificar conteúdo de data
  console.log('Dados do formulário:', data)

  fetch(`https://projeto-integrador-k9d3.onrender.com/api/movimentacoes/${id}`,{
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
      alert(`Entrada editada com Sucesso!`);
      window.location.href = '../Read/controle_estoque.html';
    })
    .catch(error => {
      console.error('Erro ao editar os dados:', error);
      alert('Erro ao editar! Cheque se preencheu todos os campos corretamente!');
    });
  });
});