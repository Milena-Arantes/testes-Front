document.addEventListener("DOMContentLoaded", function() {
    // Dados de exemplo de categorias e fornecedores (você substituirá isso com dados reais do seu sistema)
    var categorias = ["Eletrônicos", "Roupas", "Alimentos"];
  
    // Função para preencher o dropdown de categorias
    function preencherCategorias() {
      var select = document.getElementById("categoria");
  
      categorias.forEach(function(categoria) {
        var option = document.createElement("option");
        option.text = categoria;
        select.add(option);
      });
    }
    // Chamada das funções para preencher os dropdowns ao carregar a página
    preencherCategorias();
  });

  const botao = document.getElementById('btnVoltar');

botao.addEventListener('click', function(){
  //  window.location.href = 'file:///C:/Users/1050482323022/Downloads/OneDrive_2024-06-10/teste%20da%20API/frontend/index.html';
      window.location.href = "../index.html"
  
});
  