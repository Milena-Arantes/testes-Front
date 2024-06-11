const btnProd = document.getElementById('btnProduto');
btnProd.addEventListener('click', function(){
    window.location.href = "./menu/menu_produto.html";
});



const btnCadEntrada = document.getElementById('btnCadastroEntrada');
btnCadEntrada.addEventListener('click', function(){
    window.location.href = "../testes-Front/Create/cadastro_entrada.html";
});

const btnCadCat = document.getElementById('btnCadastroCategoria');
btnCadCat.addEventListener('click', function(){
    window.location.href = "./menu/menu_categoria.html";
});

const btnCadForn = document.getElementById('btnCadastroFornecedor');
btnCadForn.addEventListener('click', function(){
    window.location.href = "./menu/menu_fornecedor.html";
});

const btnControle = document.getElementById('btnControleEstoque');
btnControle.addEventListener('click', function(){
    window.location.href = "./menu/controle_estoque.html";
});