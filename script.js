const btnProd = document.getElementById('btnProduto');
btnProd.addEventListener('click', function(){
    window.location.href = "./menu/menu_produto.html";
});

const btnCadEntrada = document.getElementById('btnCadastroEntrada');
btnCadEntrada.addEventListener('click', function(){
    window.location.href = "../testes-Front/Create/cadastro_entrada.html";
});

const btnCadCat = document.getElementById('btnCategoria');
btnCadCat.addEventListener('click', function(){
    window.location.href = "./menu/menu_categoria.html";
});

const btnCadForn = document.getElementById('btnFornecedor');
btnCadForn.addEventListener('click', function(){
    window.location.href = "./menu/menu_fornecedor.html";
});

const btnControle = document.getElementById('btnControleEstoque');
btnControle.addEventListener('click', function(){
    window.location.href = "./Read/controle_estoque.html";
});

const btnProd_Forn = document.getElementById('btnProd_Forn');
btnProd_Forn.addEventListener('click', function(){
    window.location.href = "./menu/menu_prod_forn.html";
});