const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(event){
  event.preventDefault();
  window.history.back();
});

const btnCadCategoria = document.getElementById('btnCadCategoria');
btnCadCategoria.addEventListener('click', function(){
  window.location.href = '../Create/cadastro_categoria.html';
});

const btnListaCat = document.getElementById('btnListaCategoria');
btnListaCat.addEventListener('click', function(){
  window.location.href = '../Read/consulta_categoria.html';
})