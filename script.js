let produtos = [];

document.getElementById('productForm').addEventListener('submit', function(ev){
    ev.preventDefault();

    let novoProduto = {
    nome: document.getElementById('productName').value,
    codigo: document.getElementById('productCode').value,
    categoria: document.getElementById('productCategory').value,
    preco: parseFloat(document.getElementById('productPrice').value),
    quantidade: parseInt(document.getElementById('productQuantity').value)
    }
    produtos.push(novoProduto);

    const tabela = document.getElementById('productTableBody');   
    tabela.innerHTML = ""

    for (let i = 0; i < produtos.length; i++) {
        tabela.innerHTML += 
        "<tr>" +
          "<td>" + produtos[i].codigo + "</td>" +
          "<td>" + produtos[i].nome + "</td>" +
          "<td>" + produtos[i].categoria + "</td>" +
          "<td>" + produtos[i].preco + "</td>" +
          "<td>" + produtos[i].quantidade + "</td>"
        "</tr>" 
    }

  const totalProducts = document.getElementById('totalProducts');
  const lowStockProducts = document.getElementById('lowStockProducts');
  const outOfStockProducts = document.getElementById('outOfStockProducts');
  const inventoryValue = document.getElementById('inventoryValue');

    totalProducts.textContent = produtos.length;

    let estoqueBaixo = 0;
    let semEstoque = 0;
    let valorEstoque = 0;

    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].quantidade > 0 && produtos[i].quantidade <= 5) {
        estoqueBaixo += 1;
      }
    }
    lowStockProducts.textContent = estoqueBaixo;

    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].quantidade === 0) {
        semEstoque += 1;
      }
    }
    outOfStockProducts.textContent = semEstoque;

    for (let i = 0; i < produtos.length; i++) {
      valorEstoque += produtos[i].preco * produtos[i].quantidade;
    }
    inventoryValue.textContent = "R$ " + valorEstoque.toFixed(2);

   
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
      tabela.innerHTML = "";
      for (let i = 0; i < produtos.length; i++) {    
      if (produtos[i].nome.toLowerCase().includes(searchInput.value)) {
        tabela.innerHTML +=  
        "<tr>" +
          "<td>" + produtos[i].codigo + "</td>" +
          "<td>" + produtos[i].nome + "</td>" +
          "<td>" + produtos[i].categoria + "</td>" +
          "<td>" + produtos[i].preco + "</td>" +
          "<td>" + produtos[i].quantidade + "</td>" +
        "</tr>" 
      }
    }
  });
  
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.addEventListener('change', function(){
    tabela.innerHTML = "";
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].categoria === categoryFilter.value ||
    categoryFilter.value === "") {
        tabela.innerHTML +=  
        "<tr>" +
          "<td>" + produtos[i].codigo + "</td>" +
          "<td>" + produtos[i].nome + "</td>" +
          "<td>" + produtos[i].categoria + "</td>" +
          "<td>" + produtos[i].preco + "</td>" +
          "<td>" + produtos[i].quantidade + "</td>" +
        "</tr>" 
      }
    }
  }
)

  
  }
)



