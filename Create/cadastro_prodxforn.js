document.addEventListener('DOMContentLoaded', function(){
  const formProdxForn = document.getElementById('formProdxForn');
  const btnSalvarProdxForn = document.getElementById('btnSalvarProdxForn');

  btnSalvarProdxForn.addEventListener('click', function(event){
    event.preventDefault();

    // Pega dados do formulário
    const formData = new FormData(formProdxForn);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Converte valores numéricos para o tipo adequado
    data.produtoId = parseInt(data.produtoId);
    data.fornecedorId = parseInt(data.fornecedorId);

    // Log para verificar o conteúdo de data
    console.log('Dados do formulário:', data);

    // Envia os dados para a API
    fetch('https://projeto-integrador-k9d3.onrender.com/api/produtoFornecedor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // Converte o objeto data para uma string JSON
    })
    .then(response => {
      // Verifica o status da resposta
      if (!response.ok) {
        return response.json().then(error => {
          console.error('Erro da API:', error);
          throw new Error(error.message || 'Erro ao salvar os dados');
        }).catch(() => {
          // Se não conseguir extrair JSON, lança um erro genérico
          throw new Error('Erro ao salvar os dados. Status: ' + response.status);
        });
      }
      return response.json();
    })
    .then(result => {
      console.log('Dados salvos com sucesso!', result);
      alert(`Cadastrado com Sucesso!`);
      formProdxForn.reset();
    })
    .catch(error => {
      console.error('Erro ao salvar os dados:', error);
      alert('Erro ao cadastrar! Cheque se preencheu todos os campos corretamente!');
    });
  });
});
