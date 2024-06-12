document.addEventListener('DOMContentLoaded', function(){
  const formForn = document.getElementById('formFornecedor');
  const btnSalvarForn = document.getElementById('btnSalvarFornecedor');

  btnSalvarForn.addEventListener('click', function(event){
    event.preventDefault();

    // Pega dados do formulário
    const formData = new FormData(formForn);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Converte valores numéricos para o tipo adeq

    // Log para verificar o conteúdo de data
    console.log('Dados do formulário:', data);

    // Envia os dados para a API
    fetch('https://projeto-integrador-k9d3.onrender.com/api/fornecedores', {
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
      alert(`Fornecedor Cadastrado com Sucesso!`);
    formForn.reset();
    })
    .catch(error => {
      console.error('Erro ao salvar os dados:', error);
      alert('Fornecedor não cadastrado! Confira se preencheu todos os campos corretamente.');
    });
  });
});
