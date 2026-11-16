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
          "<td>" + produtos[i].nome + "</td>" +
          "<td>" + produtos[i].codigo + "</td>" +
          "<td>" + produtos[i].categoria + "</td>" +
          "<td>" + produtos[i].preco + "</td>" +
          "<td>" + produtos[i].quantidade + "</td>"
        "</tr>" 
    }
  }
)

