const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = '../index.html'
});

const btnCadProdForn = document.getElementById('btnCadProd_Forn');
btnCadProdForn.addEventListener('click', function(){
  window.location.href = '../Create/cadastro_prodxforn.html';
});

const btnListaProdForn = document.getElementById('btnListaProd_Forn');
btnListaProdForn.addEventListener('click', function(){
  window.location.href = '../Read/consulta_prodxForn.html';
})