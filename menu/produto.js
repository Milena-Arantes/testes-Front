
window.onload=function(){
  const btnCadProd = document.getElementById('btnCadastroProduto');
  btnCadProd.addEventListener('click', function(){
      window.location.href = '../Create/cadastro_produto.html';
  });
  
  const btnVoltar = document.getElementById('btnVoltar');
  btnVoltar.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = '../index.html';
  });
  
  const btnListaProd = document.getElementById('btnListaProduto');
  btnListaProd.addEventListener('click', function(){
    window.location.href = '../Read/consulta_produto.html'
  })

  }
