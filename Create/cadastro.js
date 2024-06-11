const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.history.back();
});


document.addEventListener('DOMContentLoaded', function(){
  const formulario = document.getElementById('formulario');
  const btnSalvarProd= document.getElementById('btnSalvarProd');


  btnSalvarProd.addEventListener('click', function(event){
    event.preventDefault();
    //pega dados do forms
    const formData = new FormData(formProd);
    const data = {};
    formData.forEach((value, key)=>{
      data[key] = value;
    });

    //envia os dados para a API de teste
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Dados salvos com sucesso!', result);
    })

    .catch(error => {
      console.error('Erro ao salvar os dados:', error);
    });
  });
})
  