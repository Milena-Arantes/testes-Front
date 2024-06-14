const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = '../index.html'
});

const btnCadForn = document.getElementById('btnCadForn');
btnCadForn.addEventListener('click', function(){
  window.location.href = '../Create/cadastro_fornecedor.html';
});

const btnListaForn = document.getElementById('btnListaFornecedor');
btnListaForn.addEventListener('click', function(){
  window.location.href = '../Read/consulta_fornecedor.html';
})