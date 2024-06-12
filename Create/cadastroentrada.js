
document.addEventListener('DOMContentLoaded', function() {
    const formEntrada = document.getElementById('formEntrada');
    const btnSalvarEntrada = document.getElementById('btnSalvarEntrada');
  
    btnSalvarEntrada.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Pega dados do formulário
        const formData = new FormData(formEntrada);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
  
        // Converte valores numéricos para o tipo adequado
        data.produtoId = parseInt(data.produtoId);
        data.quantidade = parseFloat(data.quantidade);
        data.codigoMovimentacao = parseInt(data.codigoMovimentacao);
  
        // Log para verificar o conteúdo de data
        console.log('Dados do formulário:', data);
  
        // Verifica se o campo validade está preenchido corretamente
        if (!data.validade) {
            alert('Por favor, preencha o campo de validade.');
            return;
        }
  
        // Envia os dados para a API
        fetch('https://projeto-integrador-k9d3.onrender.com/api/movimentacoes', {
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
            alert(`Entrada Cadastrada com Sucesso!`);
            formEntrada.reset();
            })
            .catch(error => {
              console.error('Erro ao salvar os dados:', error);
              alert('Entrada não cadastrada! Confira se preencheu todos os campos corretamente.');
          });
    });
  });
  