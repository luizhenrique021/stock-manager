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

    totalProducts.textContent = produtos.length

    let estoqueBaixo = 0;

    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].quantidade > 0 && produtos[i].quantidade <= 5) {
        estoqueBaixo += 1
      }
      lowStockProducts.textContent = estoqueBaixo
    }

  }
 )



