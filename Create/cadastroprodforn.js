document.addEventListener('DOMContentLoaded', function(){
    const formProd_Forn = document.getElementById('formProdForn');
    const btnSalvarProdForn = document.getElementById('btnSalvarProd_Forn');
  
    btnSalvarProdForn.addEventListener('click', function(event){
      event.preventDefault();
  
      // Pega dados do formulário
      const formData = new FormData(formProd_Forn);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      // Converte valores numéricos para o tipo adequado
      data.produtoId = parseInt(data.produtoId);
      data.fornecedorId = parseInt(data.fornecedorId);

      fetch('https://projeto-integrador-k9d3.onrender.com/api/produtofornecedor', {
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
        alert(`Produto Cadastrado com Sucesso!`);
        formProdForn.reset();
      })
      .catch(error => {
        console.error('Erro ao salvar os dados:', error);
        alert('Erro ao cadastrar! Cheque se preencheu todos os campos corretamente!');
      });
    });
  });
  