
let produtos = [];

const tabela = document.getElementById('productTableBody');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

function atualizarTabela() {
    tabela.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {

        if (
            produtos[i].nome.toLowerCase().includes(searchInput.value.toLowerCase()) &&
            (produtos[i].categoria === categoryFilter.value || categoryFilter.value === "")
        ) {
            tabela.innerHTML +=
                "<tr>" +
                "<td>" + produtos[i].codigo + "</td>" +
                "<td>" + produtos[i].nome + "</td>" +
                "<td>" + produtos[i].categoria + "</td>" +
                "<td>" + produtos[i].preco + "</td>" +
                "<td>" + produtos[i].quantidade + "</td>" +
                "<td><button onclick='removerProduto(" + i + ")'>Excluir</button></td>" +
                "</tr>";
        }
    }
}

function atualizarDashboard() {
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

        if (produtos[i].quantidade === 0) {
            semEstoque += 1;
        }

        valorEstoque += produtos[i].preco * produtos[i].quantidade;
    }

    lowStockProducts.textContent = estoqueBaixo;
    outOfStockProducts.textContent = semEstoque;
    inventoryValue.textContent = "R$ " + valorEstoque.toFixed(2);
}

function removerProduto(indice) {
    produtos.splice(indice, 1);

    atualizarTabela();
    atualizarDashboard();
}

document.getElementById('productForm').addEventListener('submit', function(ev) {
    ev.preventDefault();

    let novoProduto = {
        nome: document.getElementById('productName').value,
        codigo: document.getElementById('productCode').value,
        categoria: document.getElementById('productCategory').value,
        preco: parseFloat(document.getElementById('productPrice').value),
        quantidade: parseInt(document.getElementById('productQuantity').value)
    };

    produtos.push(novoProduto);

    atualizarTabela();
    atualizarDashboard();
});

searchInput.addEventListener('input', function() {
    atualizarTabela();
});

categoryFilter.addEventListener('change', function() {
    atualizarTabela();
});
