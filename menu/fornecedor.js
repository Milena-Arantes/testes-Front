const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.history.back();
});

const btnCadForn = document.getElementById('btnCadForn');
btnCadForn.addEventListener('click', function(){
  window.location.href = '../Create/cadastro_fornecedor.html';
});